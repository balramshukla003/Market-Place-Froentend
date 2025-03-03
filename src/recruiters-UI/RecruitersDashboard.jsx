import React, { useContext, useState } from 'react';
import '../css/RecruiterDashboard.css';
import icons from '../actual-UI/Icons';
import PostJobUi from './PostJobUi';
import UserProfile from '../jobbers-UI/UserProfile';
import PrivacyPolicy from '../actual-UI/PrivacyPolicy';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import EmployeeData from '../api/employeData.json';
import IMage from '../assets/image1.png';
import IMage2 from '../assets/images.jpg';

const RecruiterDashboard = () => {
    const Navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('explore');
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        jobRole: "",
        skills: "",
        resume: null,
    });
    const { setUserLoggedIn } = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
        alert("Form submitted successfully!");
    };

    return (
        <div className="dashboard-container">
            <div className="nav-bar">
                <h2 className="nav-title">Recruiter</h2>
                <nav className="nav-menu">
                    <button
                        onClick={() => setActiveTab('explore')}
                        className={`nav-button ${activeTab === 'explore' ? 'active' : ''}`}
                    >
                        🕵️ Explore Jobbers
                    </button>
                    <button
                        onClick={() => setActiveTab('post')}
                        className={`nav-button ${activeTab === 'post' ? 'active' : ''}`}
                    >
                        📮 Post Jobs
                    </button>
                    <h3>Upcoming Features</h3>
                    <button
                        onClick={() => setActiveTab('contests')}
                        className={`nav-button ${activeTab === 'contests' ? 'active' : ''}`}
                    >
                        <icons.hire color='green' /> Hiring Contests
                    </button>
                    <button
                        onClick={() => setActiveTab('chat')}
                        className={`nav-button ${activeTab === 'chat' ? 'active' : ''}`}
                    >
                        <icons.chat color='blue' /> Live Chat
                    </button>
                    <h3>Setting</h3>
                    <button
                        onClick={() => setActiveTab('user')}
                        className={`nav-button ${activeTab === 'user' ? 'active' : ''}`}
                    >
                        <icons.user color='gray' /> User Profile
                    </button>
                    <button
                        onClick={() => setActiveTab('policy')}
                        className={`nav-button ${activeTab === 'policy' ? 'active' : ''}`}
                    >
                        <icons.policy color='gray' /> Privacy Policy
                    </button>
                    <button
                        className='logout-btn'
                        onClick={() => {
                            setUserLoggedIn(false);
                            localStorage.removeItem('jwt_token');
                            window.scrollTo(0, 0);
                            Navigate('/')
                        }}
                    >
                        Logout
                    </button>
                </nav>
            </div>

            <div className="main-content">
                {activeTab === 'explore' && (
                    <div className="jobbers-section">
                        <div className="search-filter">
                            <input
                                type="text"
                                placeholder="Search skills..."
                                className="search-input"
                            />
                            <select className="filter-select">
                                <option>Filter by Experience</option>
                                <option>0-2 years</option>
                                <option>3-5 years</option>
                                <option>5+ years</option>
                            </select>
                        </div>
                        <div className="jobbers-grid">
                            {EmployeeData.map((employee) => (

                                <div className="jobber-card" key={employee.id} >
                                    <div className="job-image-cont">
                                        <img src={employee.image} className="jobber-image" alt={employee.name || 'Employee'} />
                                    </div>

                                    <h4 className="jobber-name">{employee.name || 'No Name Available'}</h4>

                                    <div className="jobber-info">
                                        <div className="jobber-info-text">
                                            <p style={{ color: 'gray' }}>{employee.category || 'No category Available'}</p>
                                            <h4 style={{ margin: "0", padding: '5px 0' }}>{employee.job_title || 'No title available'}</h4>
                                        </div>
                                        <div className="salary-demand">
                                            <p>{employee.experience || 'No experience available'}</p>
                                            <p><icons.goldenStar color='gold' /> {employee.rating || 'NA'}</p>
                                        </div>
                                    </div>
                                    <button style={{ margin: "8px 0 0 10px", cursor: "pointer" }}>view details</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {activeTab === 'post' && <PostJobUi />}
                {activeTab === 'user' && <UserProfile />}
                {activeTab === 'chat' && <h1 className='CommingSoon'>Coming Soon</h1>}
                {activeTab === 'contests' && <h1 className='CommingSoon'>Coming Soon</h1>}
                {activeTab === 'policy' && <PrivacyPolicy />}
            </div>
        </div>
    );
};

export default RecruiterDashboard;
