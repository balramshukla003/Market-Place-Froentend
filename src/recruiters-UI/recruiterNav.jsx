import '../css/recruiterNav.css';
import React, { useContext, useState } from "react";
import ImageLogo from '../assets/logo.png';
import { useNavigate, Link, Links } from "react-router-dom";
import icons from '../actual-UI/Icons';
import { AuthContext } from '../context/AuthProvider';
import { ActiveContext } from '../context/ActiveProvider';


export default function RecruiterNav() {

    const { active, setActive } = useContext(ActiveContext)
    const { authUser } = useContext(AuthContext)

    const navigate = useNavigate();
    const [postJob, setPostJob] = useState("")

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { setUserLoggedIn } = useContext(AuthContext)

    const handleNavigation = (path) => {
        setActive("explore");
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

            <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>

                <div className='navlinks-links'>

                    <h3 style={{ margin: "0 0 15px 0", fontSize: "large", color: "yellowgreen" }}>@ {authUser.name}</h3>

                    <div className="links-nav" onClick={() => {
                        setIsMenuOpen(false);
                        setActive("explore");
                    }}>
                        <icons.home />
                        <Link to=""> Home </Link>
                    </div>

                    <div className="links-nav" onClick={() => {
                        setIsMenuOpen(false);
                        setActive("post");
                    }}>
                        <icons.job />
                        <Link to="" > Post Job </Link>
                    </div>

                    <div className="links-nav" onClick={() => {
                        setIsMenuOpen(false);
                        setActive("user");
                    }}>
                        <icons.user />
                        <Link to=""> profile </Link>
                    </div>

                    <div className="links-nav" onClick={() => {
                        setIsMenuOpen(false)
                        setUserLoggedIn(false);
                        localStorage.removeItem('jwt_token');
                        navigate('/');
                    }} >
                        <icons.logout />
                        <Link to="" > logout
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
}
