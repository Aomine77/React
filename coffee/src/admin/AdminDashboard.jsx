import React from 'react';
import Sidebar from './components/Sidebar';
import AddProduct from './components/AddProduct';
import { Routes, Route } from 'react-router-dom';
function AdminDashboard() {
    return (
       <>
        <Sidebar />
        <Routes>
          <Route path="/admin/addproduct" element={<AddProduct />} />
        </Routes>
        </>
    );
}

export default AdminDashboard;
