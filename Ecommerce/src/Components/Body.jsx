import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/1.png';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.png';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.png';
import { useCart } from '../context/CartContext';
import './Body.css';
 
const Body = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Nike Air Max 270",
      price: 150,
      image: img1,
      category: "running"
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: 180,
      image: img2,
      category: "running"
    },
    {
      id: 3,
      name: "Jordan 1 Retro High",
      price: 170,
      image: img3,
      category: "casual"
    },
    {
      id: 4,
      name: "Puma RS-X",
      price: 120,
      image: img4,
      category: "casual"
    },
    {
      id: 5,
      name: "Nike Zoom Pegasus",
      price: 130,
      image: img5,
      category: "running"
    },
    {
      id: 6,
      name: "Converse Chuck 70",
      price: 85,
      image: img6,
      category: "casual"
    },
    {
      id: 7,
      name: "Nike Metcon 7",
      price: 140,
      image: img7,
      category: "training"
    },
    {
      id: 8,
      name: "Adidas NMD R1",
      price: 140,
      image: img8,
      category: "casual"
    }
  ];

  const filteredProducts = selectedFilter === 'all' 
    ? products 
    : products.filter(product => product.category === selectedFilter);

  const handleFilterClick = (category) => {
    setSelectedFilter(category);
  };

  const handleQuickView = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <main>
      <section className="hero">
        <h1>Step into Style</h1>
        <p>Discover the perfect pair for every occasion</p>
      </section>

      <section className="filters">
        <button 
          className={`filter-button ${selectedFilter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterClick('all')}
        >
          All
        </button>
        <button 
          className={`filter-button ${selectedFilter === 'running' ? 'active' : ''}`}
          onClick={() => handleFilterClick('running')}
        >
          Running
        </button>
        <button 
          className={`filter-button ${selectedFilter === 'casual' ? 'active' : ''}`}
          onClick={() => handleFilterClick('casual')}
        >
          Casual
        </button>
        <button 
          className={`filter-button ${selectedFilter === 'training' ? 'active' : ''}`}
          onClick={() => handleFilterClick('training')}
        >
          Training
        </button>
      </section>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img 
                src={product.image} 
                alt={product.name}
                loading="lazy"
              />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
            <div className="quick-actions">
              <button 
                className="button add-to-cart"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <button 
                className="button quick-view"
                onClick={() => handleQuickView(product)}
              >
                Quick View
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Body;
