import '../css/recruiterNav.css';
import React, { useContext, useState } from "react";
import ImageLogo from '../assets/logo.png';
import { useNavigate, Link } from "react-router-dom";
import icons from '../actual-UI/Icons';
import { AuthContext } from '../context/AuthProvider';


export default function RecruiterNav() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { setUserLoggedIn } = useContext(AuthContext)

    const handleNavigation = (path) => {
        navigate(path);
        setIsMenuOpen(false);
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
                <h4 style={{ margin: "0px", cursor: "pointer" }}> <icons.job />  Post Job</h4>
                <h4 style={{ margin: "0px", cursor: "pointer" }} onClick={() => {
                    setUserLoggedIn(false);
                    localStorage.removeItem('jwt_token');
                    navigate('/');
                }}> <icons.logout /> logout</h4>
            </ul>
        </nav>
    );
}
