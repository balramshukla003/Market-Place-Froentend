import Image from '../assets/homeBG.jpg';
import '../css/Landing.css';
import { Link, useNavigate } from 'react-router-dom';
import Landing2 from './Landing2';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthProvider';


function Landing() {

    const { authUser, setAuthUser, userLoggedIn, setUserLoggedIn, } = useContext(AuthContext);

    const [input, setInput] = useState('');
    const navigate = useNavigate();


    const Search = () => {
        if (!input) {
            alert("Please enter a search term");
            return;
        } else {
            setInput("");
            navigate(`/job_search`);
        }
    }

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };


    return (
        <>
            <div className='Welcome-Text'>
                <div className='Welcome'>
                    <div className='welcome-div1'>
                        <h1>Welcome to our <strong style={{ color: " rgba(184, 29, 68, 1)" }}> Market Place</strong></h1>
                    </div>
                    <div className='welcome-div2'>
                        <h4>Hire</h4>
                        <h4>Search</h4>
                    </div>
                </div>
                <div className="Welcome-Text-Cont">
                    <p>The ultimate platform for job seekers and recruiters! Energize your career and discover top talents effortlessly. Connect, network, and grow with opportunities tailored just for you. Whether you're hunting for your dream job or the perfect candidate, we've got you covered. Let's boost your journey!"</p>
                    <div className='btn-box'>
                        <input type="text" id='InputBox' onChange={(e) => setInput(e)} placeholder='Search for job titles, companies, locations' />
                        <input type="button" value="Search" placeholder='Search' id='Btn' onClick={Search} /> <br />
                        <Link to="/job_search" onClick={handleScrollToTop} className='AdvanceSearch'>AdvanceSearch</Link>
                    </div>
                </div>
            </div>
            <div className="Image-box">
                <img src={Image} alt="Image" />
            </div>
            <Landing2 />
        </>
    )
}

export default Landing;
