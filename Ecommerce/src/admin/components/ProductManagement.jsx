import { useState } from 'react';

const ProductManagement = () => {
  const [products, setProducts] = useState([
    // Your products data
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: '',
    image: null
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    // Add product logic
  };

  const handleDeleteProduct = (productId) => {
    // Delete product logic
  };

  return (
    <div className="product-management">
      <div className="section-header">
        <h2>Product Management</h2>
        <button className="add-button">Add New Product</button>
      </div>

      <div className="products-table">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.name} className="product-thumbnail" />
                </td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>
                  <button className="edit-button">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button 
                    className="delete-button"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement; 