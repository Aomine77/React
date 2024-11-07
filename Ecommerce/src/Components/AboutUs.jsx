import './AboutUs.css';
import storeImg from '../assets/store.png';
import teamImg from '../assets/store.png';

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>Our Story</h1>
        <p>Crafting comfort and style since 1995</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>Founded in 1995, Shoe Shop has been at the forefront of footwear fashion, 
            providing our customers with the perfect blend of style, comfort, and quality. 
            What started as a small store in downtown New York has grown into a 
            nationwide brand trusted by thousands.</p>
          </div>
          <div className="about-image">
            <img src={storeImg} alt="Our store front" />
          </div>
        </div>

        <div className="about-section reverse">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>We believe that every step matters. Our mission is to provide 
            exceptional footwear that not only looks great but supports your 
            journey, whatever path you choose. We carefully select each brand 
            and model, ensuring they meet our high standards of quality and style.</p>
          </div>
          <div className="about-image">
            <img src={teamImg} alt="Our team" />
          </div>
        </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <i className="fas fa-heart"></i>
              <h3>Quality</h3>
              <p>We never compromise on the quality of our products</p>
            </div>
            <div className="value-card">
              <i className="fas fa-handshake"></i>
              <h3>Service</h3>
              <p>Customer satisfaction is at the heart of everything we do</p>
            </div>
            <div className="value-card">
              <i className="fas fa-leaf"></i>
              <h3>Sustainability</h3>
              <p>Committed to reducing our environmental impact</p>
            </div>
            <div className="value-card">
              <i className="fas fa-users"></i>
              <h3>Community</h3>
              <p>Supporting and giving back to our local communities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;