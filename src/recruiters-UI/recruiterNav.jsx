import '../css/recruiterNav.css';
import React, { useState } from "react";
import ImageLogo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";

export default function RecruiterNav() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigation = (path) => {
        navigate(path);
        setIsMenuOpen(false); // Close menu after navigation
    };

    return (
        <nav className="recruiter-nav">
            <div className="nav-logo" onClick={() => handleNavigation("/")}>
                <img src={ImageLogo} alt="Logo" />
                <h1>Market Place</h1>
            </div>

            <div className="nav-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? "\u2715" : "\u2630"}
            </div>

            <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            </ul>
        </nav>
    );
}
