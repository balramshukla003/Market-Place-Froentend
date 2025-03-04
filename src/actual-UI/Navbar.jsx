import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../assets/logo.png';
import '../css/Navbar.css';

const Navbar = () => {
    const Jobs = {
        title1: "Popular Category",
        title2: "Job in Demand",
        title3: "Job by Location",
        l11: "IT jobs",
        l12: "Sales jobs",
        l13: "HR jobs",
        l14: "Marketing jobs",
        l15: "Engineering jobs",
        l21: "WFH",
        l22: "Fresher jobs",
        l23: "Remote jobs",
        l24: "Walk-in-jobs",
        l25: "Part Time jobs",
        l31: "Delhi",
        l32: "Lucknow",
        l33: "Mumbai",
        l34: "Ghaziabad",
        l35: "Greater Noida",
    };

    const Companies = {
        title1: "job_search Category",
        title2: "job_search Company",
        title3: "Research Company",
        l11: "Unicorn",
        l12: "MNC",
        l13: "Startup",
        l14: "Product based",
        l15: "Internet",
        l21: "Top companies",
        l22: "IT companies",
        l23: "Fintech companies",
        l24: "Sponsored companies",
        l25: "Featured companies",
        l31: "Interview questions",
        l32: "Company salaries",
        l33: "Company reviews",
        l34: "Salary Calculator",
        l35: "Need of Company"
    };

    const [serviceType, setServiceType] = useState(Jobs);
    const [dropdownContent, setDropdownContent] = useState({});

    const [dropDown, setdropDown] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    const [dropDownVisible, setDropDownVisible] = useState(false)

    const navigate = useNavigate();

    const handleLogoClick = () => {
        window.scrollTo(0, 0);
        navigate('/');
    };

    const useLinkClickHandler = () => {
        setdropDown(false)
    }

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    useEffect(() => {
        setDropdownContent(serviceType);
    }, [serviceType]);

    useEffect(() => {
        if (dropDown) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [dropDown]);

    let timeoutId;

    function navigateTo() {
        navigate('/login')
    }

    return (
        <div className='navbar'>
            <div className='upper-navbar'>
                <div className='nav-title' onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                    <img src={image} alt="Logo" />
                    <h2>Market Place</h2>
                </div>

                <div className="nav-links">

                    <Link
                        style={{ fontWeight: 'bold' }}
                        className='drop-link'
                        onMouseEnter={() => {
                            setdropDown(true);
                            clearTimeout(timeoutId);
                            setServiceType(Jobs);
                        }}
                        onMouseLeave={() => {
                            timeoutId = setTimeout(() => {
                                if (dropDownVisible === false) {
                                    setdropDown(false);
                                }
                            }, 500);
                        }}>Job's</Link>

                    <Link
                        style={{ fontWeight: 'bold' }}
                        className='drop-link'
                        onMouseEnter={() => {
                            clearTimeout(timeoutId);
                            setdropDown(true);
                            setServiceType(Companies);
                        }}
                        onMouseLeave={() => {
                            timeoutId = setTimeout(() => {
                                if (dropDownVisible === false) {
                                    setdropDown(false);
                                }
                            }, 500);
                        }}>Companies</Link>

                    <div className="nav-title" id="UserText" style={{ cursor: 'pointer' }}>
                        <img src={image} alt="User" />
                        <h3 onClick={() => {
                            navigateTo();
                        }} className='LoginNav'>Login</h3>
                    </div>
                </div>

                <button className="hamburger" onClick={toggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
            </div>

            {menuVisible && (
                <div className="responsiveMenu">
                    <ul>
                        <div className='nav-title'>
                            <img src={image} alt="User" />
                            <h3 onClick={() => {
                                navigateTo();
                            }}>Login</h3>
                        </div>
                    </ul>
                </div>
            )}

            {dropDown && (
                <div
                    className="drop-down"
                    onMouseEnter={() => { setDropDownVisible(true); clearTimeout(timeoutId); }}
                    onMouseLeave={() => { setDropDownVisible(false); setdropDown(false); }}
                >
                    <section className='Drop-Section'>
                        <h4>{dropdownContent.title1}</h4>
                        <Link to="/job_search" onClick={useLinkClickHandler}>{dropdownContent.l11}</Link>
                        <Link to="/job_search" onClick={useLinkClickHandler}>{dropdownContent.l12}</Link>
                        <Link to="/job_search" onClick={useLinkClickHandler}>{dropdownContent.l13}</Link>
                        <Link to="/job_search" onClick={useLinkClickHandler}>{dropdownContent.l14}</Link>
                        <Link to="/job_search" onClick={useLinkClickHandler}>{dropdownContent.l15}</Link>
                        <Link to="/job_search" onClick={useLinkClickHandler}>{dropdownContent.l16}</Link>
                    </section>
                    <div className="vertical-line"></div>
                    <section className='Drop-Section'>
                        <h4>{dropdownContent.title2}</h4>
                        <Link to="/job_search" onClick={useLinkClickHandler}>{dropdownContent.l21}</Link>
                        <Link to="/job_search" onClick={useLinkClickHandler}>{dropdownContent.l22}</Link>
                        <Link to="/job_search" onClick={useLinkClickHandler}>{dropdownContent.l23}</Link>
                        <Link to="/job_search" onClick={useLinkClickHandler}>{dropdownContent.l24}</Link>
                        <Link to="/job_search" onClick={useLinkClickHandler}>{dropdownContent.l25}</Link>
                        <Link to="/job_search" onClick={useLinkClickHandler}>{dropdownContent.l26}</Link>
                    </section>
                    <div className="vertical-line"></div>
                    <section className='Drop-Section'>
                        <h4>{dropdownContent.title3}</h4>
                        <Link to="/job_search" onClick={useLinkClickHandler}>{dropdownContent.l31}</Link>
                        <Link to="/job_search" onClick={useLinkClickHandler}>{dropdownContent.l32}</Link>
                        <Link to="/job_search" onClick={useLinkClickHandler}>{dropdownContent.l33}</Link>
                        <Link to="/job_search" onClick={useLinkClickHandler}>{dropdownContent.l34}</Link>
                        <Link to="/job_search" onClick={useLinkClickHandler}>{dropdownContent.l35}</Link>
                        <Link to="/job_search" onClick={useLinkClickHandler}>{dropdownContent.l36}</Link>
                    </section>
                </div>
            )}
        </div>
    );
};

export default Navbar;
