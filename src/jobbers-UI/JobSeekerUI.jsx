import React, { useContext, useState } from 'react';
import '../css/JobSeekerUI.css';
import icons from '../actual-UI/Icons';
import PrivacyPolicy from '../actual-UI/PrivacyPolicy';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import FilteredJobs from '../actual-UI/FilteredJobs';
import { FilterContext } from "../context/FilterProvider.jsx";

const JobSeekerUi = (props) => {

    const { filter, setFilter } = useContext(FilterContext)

    const { authUser, setAuthUser, userLoggedIn, setUserLoggedIn } = useContext(AuthContext)
    const [activeTab, setActiveTab] = useState('all');
    const [jobType, setJobType] = useState(null);
    const [experience, setExperience] = useState("");

    const Navigate = useNavigate();



    return (
        <>
            <div className="right-nav-bar" style={{ left: "0" }}>
                <nav className="nav-menu">
                    <h2>Job Seeker</h2>
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`nav-button ${activeTab === 'all' ? 'active' : ''}`}
                    >
                        <icons.jobExplore color='blue' size={20} /> All Jobs
                    </button>
                    <button
                        onClick={() => setActiveTab('fulltime')}
                        className={`nav-button ${activeTab === 'fulltime' ? 'active' : ''}`}
                    >
                        <icons.jobExplore color='blue' size={20} /> Fulltime Job
                    </button>
                    <button
                        onClick={() => setActiveTab('intern')}
                        className={`nav-button ${activeTab === 'intern' ? 'active' : ''}`}
                    >
                        <icons.jobExplore color='blue' size={20} /> Internship Jobs
                    </button>



                    <h3>Upcoming Features</h3>
                    <button
                        onClick={() => setActiveTab('contests')}
                        className={`nav-button ${activeTab === 'contests' ? 'active' : ''}`}
                        disabled>
                        <icons.hire color='gray' /> Hiring Contests
                    </button>
                    <button
                        onClick={() => setActiveTab('chat')}
                        className={`nav-button ${activeTab === 'chat' ? 'active' : ''}`}
                        disabled>
                        <icons.chat color='gray' /> Live Chat
                    </button>
                    <button
                        onClick={() => setActiveTab('prefer')}
                        className={`nav-button ${activeTab === 'prefer' ? 'active' : ''}`} disabled>
                        <icons.prefer color='gray' /> Preference Job
                    </button>

                    <h3>Help</h3>
                    <button
                        onClick={() => setActiveTab('help')}
                        className={`nav-button ${activeTab === 'help' ? 'active' : ''}`}
                    >
                        <icons.questionMark size={18} /> Suggestions / Help
                    </button>

                </nav>
            </div>



            <div className="dashboard-container-jobber">
                <div className="main-cont-job">

                    {activeTab === 'all' && (
                        <FilteredJobs />
                    )}

                </div>



                {activeTab === 'all' && (
                    <div className="right-nav-bar" style={{ right: "0", margin: "12px 12px 0 0" }}>
                        <div className="filter-apply">
                            <nav className="nav-menu">
                                <h4>Apply Filter</h4>

                                <div className='radio-btn'>

                                    <label htmlFor="option2">
                                        <input type="radio" id="job-seeker" name="choice" value="On-site" onChange={(e) => { setJobType(e.target.value); }} /> On-Site
                                    </label>
                                    <label htmlFor="option3">
                                        <input type="radio" id="job-seeker" name="choice" value="Remote" onChange={(e) => { setJobType(e.target.value); }} /> WFH
                                    </label>
                                    <label htmlFor="option4">
                                        <input type="radio" id="job-seeker" name="choice" value="Hybrid" onChange={(e) => { setJobType(e.target.value); }} /> Hybrid
                                    </label>
                                </div>
                                <div className='ex-drop-down'>
                                    <h4 style={{ color: "gray" }}>Work Experience</h4>

                                    <input list="options" name="option" id="option-input"
                                        style={{ borderRadius: "5px", border: "1px solid gray", padding: "5px", fontSize: "medium" }}
                                        onChange={(e) => { setExperience(e.target.value); }}
                                        placeholder={"select experience"}
                                    />

                                    <datalist id="options">
                                        <option value="Fresher"></option>
                                        <option value="0-2 years"></option>
                                        <option value="3+ years"></option>
                                    </datalist>
                                </div>
                                <div className='fltr-btns'>
                                    <button
                                        className='clrbtn'
                                        onClick={() => {
                                            window.location.reload();
                                        }}
                                    >Clear</button>

                                    <button
                                        className="aplybtn"
                                        onClick={() => {
                                            alert(`Type: ${jobType}, Experience: ${experience}`);
                                            setFilter({ workMode: jobType });
                                        }}
                                    >
                                        Apply
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </div>
                )}


            </div>

        </>
    );
};

export default JobSeekerUi;





