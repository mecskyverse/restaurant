import React from 'react';
import { Link } from 'react-router-dom'; // Import for using Link components in navigation
import logoImage from '../assets/img/LOGO_Finalpng.png';
import leafBranch4 from '../assets/img/leaf-branch-4.png'; // Import for leaf-branch-4.png
import leafBranch3 from '../assets/img/leaf-branch-3.png'; // Import for leaf-branch-3.png

const Navbar = () => {
    const [showSidebar, setShowSidebar] = React.useState(false);

    return (
        <header className="header" id="header">
            <nav className="nav px-3">
                <Link to="/" className="nav__logo">
                    <img src={logoImage} alt="logo image" />
                    Delux Dabha
                </Link>
                <ul className={`md:hidden gap-3 flex-col absolute top-0 right-0 p-5 justify-center h-screen w-[250px] bg-[#fff1eb]  flex ${showSidebar ? '' : 'hidden'}`}>
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
                <ul className={`md:flex hidden nav__list gap-10 justify-center bg-[#fff1eb]   `}>
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

                <div className={`nav__clos absolute top-3 cursor-pointer right-3 z-10 flex m-[20px] md:hidden ${showSidebar ? '' : 'hidden'}`} id="nav-close" onClick={() => setShowSidebar(!showSidebar)}>
                    <i className="ri-close-line text-3xl"></i>
                </div>

                <img src={leafBranch4} alt="nav image" className="nav__img-1" />
                <img src={leafBranch3} alt="nav image" className="nav__img-2" />

                <div className={`nav__buttons `}>
                    <i className="ri-moon-line change-theme" id="theme-button"></i> {/* Placeholder for theme change functionality */}
                    <div className="nav__toggle" id="nav-toggle" onClick={() => setShowSidebar(!showSidebar)}>
                        <i className="ri-apps-2-line"></i>
                    </div>
                </div>
            </nav>
        </header >
    );
};

export default Navbar;
