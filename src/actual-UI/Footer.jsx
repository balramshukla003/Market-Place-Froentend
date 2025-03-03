import '../css/Footer.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const handleFutureFeatures = () => {
        handleScrollToTop();
        alert('comming soon...');
    };

    return (
        <div className="Footer">
            <div className="section-collection">
                <section className="footer-sec">
                    <h1>
                        <img src={Logo} alt="logo" className="LogoImg" />
                        Market Place
                    </h1>
                    <p style={{ textDecoration: 'underline' }}>Market Place</p>
                    <p>
                        A job seeker website connects recruiters and job seekers on a unified platform.
                        <br />
                        It allows recruiters to post job openings and browse candidate profiles, while job seekers can apply for jobs, upload resumes, and receive personalized recommendations.
                        <br />
                        Features include advanced search filters, skill assessments, and seamless communication tools, creating an efficient hiring process.
                    </p>
                    <p>Fill Color In Life With Us!</p>
                </section>

                <section className="footer-sec" >
                    <h2>Important Links</h2>
                    <p>
                        <Link to='/' onClick={handleScrollToTop}>
                            Home
                        </Link>
                    </p>
                    <p>
                        <Link to="/careers" onClick={handleScrollToTop}>
                            Careers
                        </Link>
                    </p>
                    <p>
                        <Link to="/contact" onClick={handleScrollToTop}>
                            Contact
                        </Link>
                    </p>
                    <p>
                        <Link to="/about" onClick={handleScrollToTop}>
                            About Us
                        </Link>
                    </p>
                </section>

                <section className="footer-sec">
                    <h2>Social Media</h2>
                    <p>
                        <Link to="/" onClick={handleFutureFeatures}>
                            Facebook
                        </Link>
                    </p>
                    <p>
                        <Link to="/" onClick={handleFutureFeatures}>
                            Instagram
                        </Link>
                    </p>
                    <p>
                        <Link to="/" onClick={handleFutureFeatures}>
                            LinkedIn
                        </Link>
                    </p>
                    <p>
                        <Link to="/" onClick={handleFutureFeatures}>
                            GitHub
                        </Link>
                    </p>
                </section>

                <section className="footer-sec">
                    <h2>Important Features</h2>
                    <p>
                        <Link to="/" onClick={handleFutureFeatures}>
                            Blog
                        </Link>
                    </p>
                    <p>
                        <Link to="/" onClick={handleFutureFeatures}>
                            Openings
                        </Link>
                    </p>
                    <p>
                        <Link to="/job_search" onClick={handleScrollToTop}>
                            Search Job
                        </Link>
                    </p>
                    <p>
                        <Link to="/" onClick={handleFutureFeatures}>
                            Search Candidate
                        </Link>
                    </p>
                </section>

                <section className="footer-sec">
                    <h2>Get In Touch</h2>
                    <p>support@marketplace.com</p>
                    <p>+91 90XXXXXX98</p>
                    <p>Text us on</p>
                    <p>WhatsApp/Instagram</p>
                </section>
            </div>

            <div className="footer-copyright">
                | Copyright © 2025 @ Market Place
            </div>
        </div>
    );
};

export default Footer;
