import './Shop.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Shop.css';
import img1 from '../assets/1.png';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.png';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.png';
import { useCart } from '../context/CartContext';
import CustomSelect from './CustomSelect';

const Shop = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
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
      name: "Jordan 1 High",
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

  const filterProducts = (products) => {
    return products
      .filter(product => {
        const matchesCategory = selectedFilter === 'all' || product.category === selectedFilter;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPriceRange = priceRange === 'all' ||
          (priceRange === 'under100' && product.price < 100) ||
          (priceRange === '100-150' && product.price >= 100 && product.price <= 150) ||
          (priceRange === 'over150' && product.price > 150);
        
        return matchesCategory && matchesSearch && matchesPriceRange;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'priceLowToHigh':
            return a.price - b.price;
          case 'priceHighToLow':
            return b.price - a.price;
          case 'name':
            return a.name.localeCompare(b.name);
          default:
            return 0;
        }
      });
  };

  const filteredProducts = filterProducts(products);

  const categoryOptions = [
    { value: 'all', label: 'All Categories', icon: 'fa-th-large' },
    { value: 'running', label: 'Running', icon: 'fa-running' },
    { value: 'casual', label: 'Casual', icon: 'fa-shoe-prints' },
    { value: 'training', label: 'Training', icon: 'fa-dumbbell' }
  ];

  const priceOptions = [
    { value: 'all', label: 'All Prices', icon: 'fa-tag' },
    { value: 'under100', label: 'Under $100', icon: 'fa-dollar-sign' },
    { value: '100-150', label: '$100 - $150', icon: 'fa-dollar-sign' },
    { value: 'over150', label: 'Over $150', icon: 'fa-dollar-sign' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured', icon: 'fa-star' },
    { value: 'priceLowToHigh', label: 'Price: Low to High', icon: 'fa-sort-amount-down' },
    { value: 'priceHighToLow', label: 'Price: High to Low', icon: 'fa-sort-amount-up' },
    { value: 'name', label: 'Name', icon: 'fa-font' }
  ];

  const handleQuickView = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="shop-container">
      <div className="shop-filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-options">
          <CustomSelect
            options={categoryOptions}
            value={selectedFilter}
            onChange={setSelectedFilter}
            icon="fa-th-large"
          />
          
          <CustomSelect
            options={priceOptions}
            value={priceRange}
            onChange={setPriceRange}
            icon="fa-tag"
          />
          
          <CustomSelect
            options={sortOptions}
            value={sortBy}
            onChange={setSortBy}
            icon="fa-sort"
          />
        </div>
      </div>

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
              <p className="product-price">${product.price}</p>
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

      {filteredProducts.length === 0 && (
        <div className="no-results">
          <h3>No products found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Shop;