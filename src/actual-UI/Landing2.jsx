import React from 'react'
import '../css/Landing2.css';
import Icons from './Icons.jsx';
import Images from './Images.jsx'
import discover from '/Job-Seeker4.svg';
import { useNavigate } from 'react-router-dom';

const Landing2 = () => {
    const navigate = useNavigate();


    function Eplorejob() {
        window.scrollTo(0, 0);
        navigate('/job_search');
    }

    return (
        <div className='landing2-outer'>

            <div className='Discover-job'>
                <div className='Job-Seeker-box'>
                    <img src={discover} alt="Job Seeker" className='jobseeker-img' />
                </div>
                <div className='Job-Seeker-box'>
                    <h3>Unlock your potential</h3>
                    <p>find top talent or your dream job with ease on our platform, where skills meet opportunity!</p>
                    <button onClick={() => { navigate('/login') }}>Get Started</button>
                </div>
            </div>


            <div className="landing2-inner">
                <div className="category">
                    {[
                        { icon: <Icons.remote size={18} />, label: "Remote" },
                        { icon: <Icons.buildings />, label: "MNC" },
                        { icon: <Icons.technology size={18} />, label: "Technic.." },
                        { icon: <Icons.cloudwatch size={18} />, label: "Marketi.." },
                        { icon: <Icons.salesforce />, label: "Sales" },
                        { icon: <Icons.deviceAnalytics />, label: "Data.." },
                        { icon: <Icons.developerMode size={50} />, label: "Develop.." },
                        { icon: <Icons.certificate size={18} />, label: "Interns.." },
                        { icon: <Icons.analytics />, label: "Analy.." },
                    ].map(({ icon, label }, index) => (
                        <section key={index} className="job-cate-section" onClick={Eplorejob}>
                            {icon} <p>{label}</p> <Icons.mathGreater />
                        </section>
                    ))}
                </div>
            </div>


            <div className="landing3-inner">
                <div className="Box-l3">
                    <h1>Best Jobs & Talents</h1>
                    <h4>Find your Best match, Dream jobs, Best offers, Dream companies, Guiders, Mentors, Referrals and many more here!</h4>
                    <button onClick={() => {
                        navigate('/register');
                    }}>Join Now !</button>
                </div>
                <div className="Box-l3">
                    <div className="box-sections" onClick={Eplorejob}>
                        {[
                            { src: Images.development, alt: "development", label: "Development" },
                            { src: Images.advertising, alt: "advertisement", label: "Advertisement" },
                            { src: Images.graphic, alt: "graphics", label: "Graphics Designing" },
                            { src: Images.marketing, alt: "marketing", label: "Marketing" },
                            { src: Images.google, alt: "google", label: "Google" },
                            { src: Images.meta, alt: "meta", label: "Meta" },
                            { src: Images.youtube, alt: "youtube", label: "Youtube" },
                            { src: Images.infosys, alt: "infosys", label: "Infosys" },
                        ].map(({ src, alt, label }, index) => (
                            <section key={index}>
                                <img src={src} className="sec-img" alt={alt} />
                                <p>{label}</p>
                            </section>
                        ))}
                    </div>
                </div>
            </div>

            <div className="landing2-course">

                <div className="course-text">
                    <h1>Popular certification courses</h1>
                    <p>Fastest way to build your CV</p>
                </div>

                <div className="card-section">
                    <div className="course-cards-container">
                        {[
                            { src: Images.webdev, alt: "webDev", title: "Web Development", rating: 4.5 },
                            { src: Images.python, alt: "python", title: "Programming in Python", rating: 4.3 },
                            { src: Images.java, alt: "java", title: "Programming in Java", rating: 4.4 },
                            { src: Images.react, alt: "react", title: "Frontend in React", rating: 4.2 },
                        ].map(({ src, alt, title, rating }, index) => (
                            <div key={index} className="course-cards">
                                <div className="cards-img">
                                    <img src={src} alt={alt} />
                                </div>
                                <div className="cards-text">
                                    <p style={{ margin: "0px" }}>{title}</p>
                                    <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                        <Icons.goldenStar color="gold" size={18} />{rating} | 500+ learner
                                    </p>
                                    <button>Learn Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Landing2
