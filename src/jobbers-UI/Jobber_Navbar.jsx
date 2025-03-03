import React, { useContext, useEffect, useRef, useState } from 'react';
import '../css/JobSeekerUI.css';
import ImageLogo from '../assets/logo.png';
import Icons from '../actual-UI/Icons.jsx';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider.jsx';
import UserProfile from './UserProfile.jsx';

export default function Jobber_Navbar() {
    const navigate = useNavigate();
    const { authUser, setAuthUser, setUserLoggedIn } = useContext(AuthContext);

    const [isOpen, setIsOpen] = useState(false); // For mobile menu
    const [isUp, setIsUp] = useState(false); // For dropdown toggle

    const windowRef = useRef(null);

    const closeWindow = () => {
        setIsOpen(false);
        setIsUp(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (windowRef.current && !windowRef.current.contains(event.target)) {
                closeWindow();
            }
        };

        const handleScroll = () => {
            closeWindow();
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLogoClick = (path = '/') => {
        navigate(path);
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsUp(!isUp);
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        setUserLoggedIn(false);

        localStorage.removeItem('jwt_token');
        navigate('/');
    };

    console.log("Navbar: ", authUser.name)
    return (
        <nav className="jobSeeker-Nav">
            <div className="nav-part">
                <div className="jobber-logo-container" onClick={() => handleLogoClick('/')}>
                    <img src={ImageLogo} alt="Logo" />
                    <h1>Market Place</h1>
                </div>
            </div>

            <div className="nav-part" id="userPart">
                <Icons.notification
                    size={28}
                    color="rgb(59 59 59)"
                    onClick={() => alert('Coming Soon')}
                />
                <div className="jobber-detail" onClick={toggleMenu}>
                    <img
                        src={ImageLogo}
                        alt="User"
                        style={{
                            width: '30px',
                            height: '30px',
                            border: '1px solid #ccc',
                            borderRadius: '50%',
                        }}
                    />
                    <h4>{authUser.name}</h4>
                    {isUp ? <Icons.downArrow size={18} /> : <Icons.upArrow size={18} />}
                </div>
            </div>

            <button onClick={toggleMenu} className="hamburger">
                {isOpen ? '✖' : '☰'}
            </button>

            {isUp && (
                <div className="toggledMenu" ref={windowRef}>
                    <div className="jobber-detail" id="jobber-detail" onClick={() => handleLogoClick('/')}>
                        <img
                            src={ImageLogo}
                            alt="User"
                            style={{
                                width: '22px',
                                height: '22px',
                                border: '1px solid #ccc',
                                borderRadius: '50%',
                            }}
                        />
                        <h4>Balram Shukla</h4>
                    </div>
                    <div className="usersett">
                        <p>
                            <Icons.policy size={18} /> Privacy Policy
                        </p>
                        <p onClick={() => {
                            closeWindow();
                            navigate('/user/profile')
                        }} >
                            <Icons.user size={18} /> User Profile
                        </p>
                    </div>
                    <p onClick={handleLogout}>
                        <Icons.logout size={18} /> Logout
                    </p>
                </div>
            )}
        </nav>
    );
}
