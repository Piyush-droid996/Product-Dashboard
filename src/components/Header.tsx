import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUserCircle, FaCog, FaBars } from 'react-icons/fa';
import '../Styles/Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when resizing the window back to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar-heading">
      <div className="navbar-left">
        {/* Hamburger for mobile */}
        <div className="hamburger-icon" onClick={toggleMobileMenu}>
          <FaBars />
        </div>

        {/* Only show links inside hamburger on mobile */}
        <div className={`navbar-links ${isOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/orders" className="nav-link">Orders</Link>
          <Link to="/integrations" className="nav-link">Integrations</Link>

          <div className="dropdown">
            <button className="dropdown-btn">
              Tracking Page <span className="dropdown-arrow">▾</span>
            </button>
            <ul className="dropdown-menu">
              <li><Link to="/tracking-page">View Tracking</Link></li>
              <li><Link to="/tracking-history">Tracking History</Link></li>
            </ul>
          </div>

          <Link to="/partner" className="nav-link">Partner with Us</Link>
        </div>
      </div>

      {/* These icons remain visible even on mobile */}
      <div className="navbar-icons">
        <div className="search-container">
          <input className="search-input" type="text" placeholder="Search" />
          <FaSearch className="search-icon" />
        </div>

        <FaUserCircle className="account-icon" />
        <span className="icon-label">Account</span>

        <FaCog className="settings-icon" />
        <span className="icon-label">Settings</span>
      </div>
    </nav>
  );
};

export default Header;
