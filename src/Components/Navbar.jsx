import React from 'react';
import { Link } from 'react-router-dom'; // Import for React Router

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <h1>CR</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link> {/* Use Link instead of <a> */}
            </li>
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
