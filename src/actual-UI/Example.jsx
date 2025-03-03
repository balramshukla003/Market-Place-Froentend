import React, { useState } from 'react'
import '../css/JobSeekerUI.css';
import ImageLogo from '../assets/logo.png';
import Icons from '../actual-UI/Icons.jsx'
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import FilteredJobs from '../actual-UI/FilteredJobs.jsx'
import JobSeekerUi from '../jobbers-UI/JobSeekerUI.jsx';

export default function Jobber_Navbar() {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [isUp, setIsUp] = useState(false);


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogoClick = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsUp(!isUp);
        setIsOpen(!isOpen);
    }



    return (
        <>
            <nav className='jobSeeker-Nav'>
                <div className="nav-part">
                    <div className="jobber-logo-container" onClick={handleLogoClick}>
                        <img src={ImageLogo} alt="Logo" />
                        <h1>Market Place</h1>
                    </div>
                </div>

                <div className="nav-part" id='userPart'>
                    <Icons.notification size={28} color='rgb(59 59 59)' onClick={() => {
                        alert('comming Soon')
                    }} />
                    <div className="jobber-detail" onClick={toggleMenu}>
                        <img src={ImageLogo} alt="Logo"
                            style={{
                                width: "30px", height: "30px", border: "1px solid #ccc",
                                borderRadius: "50%"
                            }} />
                        <h4>Balram Shukla</h4>
                        {isUp ? <Icons.downArrow size={18} /> : <Icons.upArrow size={18} />}
                    </div>
                </div>

                <button
                    onClick={toggleMenu}
                    className="hamburger"
                >
                    {isOpen ? "✖" : "☰"}
                </button>

                {isUp && <div className="toggledMenu" >
                    <div className="jobber-detail" id='jobber-detail' onClick={handleLogoClick}>
                        <img src={ImageLogo} alt="Logo"
                            style={{
                                width: "22px", height: "22px", border: "1px solid #ccc",
                                borderRadius: "50%"
                            }} />
                        <h4>Balram Shukla</h4>
                    </div>

                    <div className="usersett">
                        <p> <Icons.user size={17} /> Account Settings</p>
                        <p> <Icons.questionMark size={18} /> Suggestions / Help</p>
                    </div>
                    <p> <Icons.logout size={18} /> Logout</p>
                </div>}
            </nav>

            <JobSeekerUi />
        </>
    );
}