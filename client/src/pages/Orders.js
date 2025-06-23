// client/src/pages/Orders.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const OrdersContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
`;

const OrderCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/orders', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <OrdersContainer>
      <h2>Your Orders</h2>
      {orders.map((order) => (
        <OrderCard key={order._id}>
          <p>Order ID: {order._id}</p>
          <p>Total Amount: ${order.totalAmount}</p>
          <p>Status: {order.status}</p>
          <div>
            {order.games.map((item) => (
              <div key={item.game._id}>
                <p>{item.game.title} x {item.quantity}</p>
              </div>
            ))}
          </div>
        </OrderCard>
      ))}
    </OrdersContainer>
  );
}

export default Orders;
