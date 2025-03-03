import '../css/Login.css';
import React, { useContext, useState } from 'react';
import image from '../assets/draw2.jpg';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';



const Register = () => {

    const navigate = useNavigate();

    const { authUser, setAuthUser, userLoggedIn, setUserLoggedIn, } = useContext(AuthContext);

    if (userLoggedIn) {
        alert('You are logged in');
        navigate('/');
    }


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setRegisterType] = useState(null);

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);

        if (!type) {
            alert("Please select registration type");
            return;
        } else {
            setLoading(true);

            const backendURl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'

            try {
                const response = await fetch(`${backendURl}/register`, {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, type, email, password }),
                });

                const data = await response.json();
                setLoading(false);

                if (response.ok) {
                    setError("Registration Successful redirecting to login page");
                    navigate('/login');
                } else {
                    setError(data.error || "Server error.");
                }
            } catch (err) {
                setLoading(false);
                setError("Failed to connect to the server. Please try again later.");
            }

        }
    };

    const handleSocialRegister = (platform) => {
        alert(`Social Registeration with ${platform} is Comming Soon`)
    };

    function Back() {
        window.scrollTo(0, 0);
        navigate('/');
    }

    return (
        <>
            <div className="authentication-container">

                <div className="authentication-inner">

                    <div className="authentication-detail-box " id='authentication-detail-box-img'>
                        <img src={image} alt="image" />
                    </div>

                    <div className="authentication-detail-box" id='authentication-detail-box-form'>

                        <form onSubmit={handleRegister} className='authenticaton-form' id='registerform'>

                            <h2 className="Heading">
                                <img src={logo} alt="logo" className='logoImg' onClick={Back} />
                                Create Your Account
                            </h2>


                            <label>Name</label>
                            <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} required />

                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required />

                            <label>Password</label>
                            <input type="password" placeholder="Create a password" onChange={(e) => setPassword(e.target.value)} required />

                            <div className='radio-btns'>
                                <label htmlFor="option1">
                                    <input type="radio" id="recruiter" name="choice" value="recruiter" onChange={(e) => { setRegisterType(e.target.value); }} /> Recruiter
                                </label>
                                <label htmlFor="option2">
                                    <input type="radio" id="job-seeker" name="choice" value="job-seeker" onChange={(e) => { setRegisterType(e.target.value); }} /> Job seeker
                                </label>
                            </div>
                            <p style={{ color: "red", width: "300px" }}>{error}</p>
                            <button type="submit" className='submit-btn' disabled={loading}
                                style={{ cursor: loading ? "not-allowed" : "pointer", backgroundColor: loading ? '#3b5998' : '#4768df' }} >Register</button>

                            <div className="divider">or Register with</div>
                            <div className="social-login">
                                <button
                                    className="social-button google"
                                    onClick={() => handleSocialRegister('Google')}
                                >
                                    Google
                                </button>
                                <button
                                    className="social-button facebook"
                                    onClick={() => handleSocialRegister('Facebook')}
                                >
                                    Facebook
                                </button>
                                <button
                                    className="social-button github"
                                    onClick={() => handleSocialRegister('GitHub')}
                                >
                                    GitHub
                                </button>
                            </div>
                            <p className="signup-link">
                                Already have an account? <Link to="/login">Sign In</Link>
                            </p>
                        </form>
                    </div>
                </div>




            </div >
        </>
    );
};

export default Register;
