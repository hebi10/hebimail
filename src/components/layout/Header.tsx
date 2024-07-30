import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category">Category</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Sign Up</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/board">Board</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/notice">Notice</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/review">Review</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
