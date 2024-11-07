const OrderManagement = () => {
  const orders = [
    // Sample orders data
    {
      id: 1,
      customer: 'John Doe',
      date: '2024-03-15',
      status: 'Pending',
      total: 299.99
    },
    // Add more orders
  ];

  return (
    <div className="order-management">
      <div className="section-header">
        <h2>Order Management</h2>
      </div>

      <div className="orders-table">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>
                  <span className={`status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
                <td>${order.total}</td>
                <td>
                  <button className="view-button">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="edit-button">
                    <i className="fas fa-edit"></i>
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

export default OrderManagement; 