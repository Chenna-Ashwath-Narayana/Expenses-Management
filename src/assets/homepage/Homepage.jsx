import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import navbarimage from '../images/logo-image.png';
import homepageimage from '../images/homepage-image.png';

const Homepage = () => {
  return (
    <>
      <div className="expenses-mainpage-container">
        <div className="expenses-homepage-container">
          <header className="expenses-headerpage-container">
            <nav className="expenses-navbarpage-container">
              <div className="expenses-imagepage-container">
                <img src={navbarimage} alt="Navbar Image is not Available" />
              </div>
              <div className="expenses-link-container">
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/service">SERVICE</Link>
                <Link to="/contact">CONTACT</Link>
              </div>
              <div className="expenses-buttonpage-container">
                <Link to="/getstarted">Get Started</Link>
              </div>
            </nav>
          </header>

          <div className="expenses-body-container">
            <div className="expenses-body-content-container">
              <h1>Easy Solutions for Expense Management</h1>
              <p>
                Take control of your financial life with our simple and powerful expense management system. 
                Track your daily spending, set smart budgets, and get personalized insights — all in one place.
              </p>

              <div className="expenses-features-container">
                <h2>Why Choose Us?</h2>
                <ul>
                  <li><strong>Real-Time Tracking:</strong> Monitor expenses as they happen</li>
                  <li><strong>Smart Budgeting:</strong> Create custom budgets for categories like Food, Travel, or Bills</li>
                  <li><strong>Insightful Reports:</strong> Get monthly spending analysis and charts</li>
                  <li><strong>Multi-Device Sync:</strong> Access your data anytime, anywhere</li>
                  <li><strong>Secure & Private:</strong> Your data stays safe and encrypted</li>
                </ul>
              </div>
            </div>

            <div className="expenses-body-image-container">
              <img src={homepageimage} alt="Home Page Image" />
            </div>
          </div>

          <footer>
            <div></div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Homepage;
