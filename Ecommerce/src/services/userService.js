import { db } from '../firebase';
import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  collection, 
  query, 
  where, 
  getDocs 
} from 'firebase/firestore';

export const userService = {
  // Create or update user profile
  async saveUserProfile(userId, userData) {
    try {
      const userRef = doc(db, 'users', userId);
      await setDoc(userRef, {
        ...userData,
        updatedAt: new Date().toISOString()
      }, { merge: true });
    } catch (error) {
      console.error('Error saving user profile:', error);
      throw error;
    }
  },

  // Get user profile
  async getUserProfile(userId) {
    try {
      const userRef = doc(db, 'users', userId);
      const userSnap = await getDoc(userRef);
      return userSnap.exists() ? userSnap.data() : null;
    } catch (error) {
      console.error('Error getting user profile:', error);
      throw error;
    }
  },

  // Update user settings
  async updateUserSettings(userId, settings) {
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        settings,
        updatedAt: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error updating user settings:', error);
      throw error;
    }
  },

  // Add shipping address
  async addUserAddress(userId, address) {
    try {
      const userRef = doc(db, 'users', userId);
      const userSnap = await getDoc(userRef);
      const addresses = userSnap.data()?.addresses || [];
      
      await updateDoc(userRef, {
        addresses: [...addresses, { ...address, id: Date.now().toString() }]
      });
    } catch (error) {
      console.error('Error adding address:', error);
      throw error;
    }
  }
}; 