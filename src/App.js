import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';

import { Products, Navbar } from "./components";

const App = () => {
  // State to store fetched product data and cart information
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  // Function to fetch product data from commercejs API
  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();
      setProducts(data);
    } catch (error) {
      console.log('Could not fetch products:', error);
    }
  }

  // Function to fetch cart information from commercejs API
  const fetchCart = async () => {
    try {
      setCart(await commerce.cart.retrieve());
    } catch (error) {
      console.log('Could not fetch cart:', error);
    }
  }

  // Function to handle adding a product to the cart
  const handleAddToCart = async (productId, quantity) => {
    try {
      setCart(await commerce.cart.add(productId, quantity));
    } catch (error) {
      console.log('Could not add product to cart:', error);
    }
  };

  // Fetch initial product data and cart information on component mount
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart); // Log cart information for debugging

  return (
    <div>
    
      <Navbar items={cart} />
      <Products products={products} onAddToCart={handleAddToCart} />
    </div>
  )
}

export default App;
