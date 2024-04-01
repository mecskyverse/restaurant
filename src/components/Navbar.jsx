import React from 'react';
import { Link } from 'react-router-dom'; // Import for using Link components in navigation
import logoImage from '../assets/img/LOGO_Finalpng.png';
import leafBranch4 from '../assets/img/leaf-branch-4.png'; // Import for leaf-branch-4.png
import leafBranch3 from '../assets/img/leaf-branch-3.png'; // Import for leaf-branch-3.png

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false); // State for managing menu visibility

    const handleMenuToggle = () => {
        setIsOpen(!isOpen); // Toggle menu open/closed state
    };

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <Link to="/" className="nav__logo">
                    <img src={logoImage}  alt="logo image" />
                    Delux Dabha
                </Link>

                <ul className={`nav__list ${isOpen ? 'nav__list--active' : ''}`}> {/* Add conditional class for active menu */}
                    <li className="nav__item">
                        <Link to="/" className="nav__link">Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/about" className="nav__link">About Us</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/menu" className="nav__link">Menu</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/contactUs" className="nav__link">Contact Us</Link>
                    </li>
                </ul>

                <div className="nav__close" id="nav-close" onClick={handleMenuToggle}>
                    <i className="ri-close-line"></i>
                </div>

                <img src={leafBranch4} alt="nav image" className="nav__img-1" />
                <img src={leafBranch3} alt="nav image" className="nav__img-2" />

                <div className="nav__buttons">
                    <i className="ri-moon-line change-theme" id="theme-button"></i> {/* Placeholder for theme change functionality */}
                    <div className="nav__toggle" id="nav-toggle" onClick={handleMenuToggle}>
                        <i className="ri-apps-2-line"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
