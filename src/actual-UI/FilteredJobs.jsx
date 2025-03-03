import React, { useState, useEffect } from "react";
import Icons from "./Icons.jsx";
import "../css/FilteredJobs.css";

const FilteredJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [Clogo, setClogo] = useState("");

    const fetchJobs = async () => {
        setLoading(true);
        setError("");
        const backendURl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'
        try {
            const response = await fetch(`${backendURl}/fetchjobs`, {   //https://market-place-backend-vv9b.onrender.com
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            const data = await response.json();
            setLoading(false);

            if (response.ok) {
                setJobs(data.jobs);
            } else {
                setError(data.error || "Server error.");
            }
        } catch (err) {
            setLoading(false);
            setError("Failed to fetch jobs. Please try again later." + err);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <>
            <div className="right-sidebar-outer" key={jobs.id}>
                {loading && (
                    <div className="messageArea">
                        <p className="loading-message">Loading jobs...</p>
                    </div>
                )}
                {error && (
                    <div className="messageArea">
                        <p className="error-message">{error}</p>
                    </div>
                )}
                {!loading && !error && jobs.length === 0 && (
                    <div className="messageArea">
                        <p className="no-jobs-message">No jobs found. Please try again later.</p>
                    </div>
                )}
                {jobs.map((job, index) => (
                    <div className="right-sidebar" id={index} key={index}>
                        <div className="job-description-box">
                            <div className="job-company-name">
                                <h3>
                                    {job.jobProfile} -<span>{job.jobType}</span>
                                </h3>
                                <h4>
                                    {job.companyName} &nbsp;
                                    <span>
                                        {<Icons.goldenStar color="gold" />} {job.rating || "4.2"} |{" "}
                                        {job.reviewsCount || "253"} reviews
                                    </span>
                                </h4>
                            </div>
                            <div className="company-logo">
                                {job.companyLogo ? (
                                    <img
                                        src={job.companyLogo}
                                        alt="logo"
                                        style={{ width: "75px" }}
                                    />
                                ) : (
                                    <Icons.logoImg size={25} />
                                )}
                            </div>
                        </div>
                        <div className="job-offers-detail">
                            <div className="job-offers-detail-inner">
                                <p>
                                    <Icons.job /> {job.experience}
                                </p>
                                <p>
                                    <Icons.rupees /> {job.salary}
                                </p>
                                <p>
                                    <Icons.location /> {job.location}
                                </p>
                            </div>
                            <div>
                                <p>
                                    <Icons.education /> {job.education}
                                </p>
                            </div>
                            <div>
                                <p>
                                    <Icons.skill />
                                    {job.skills?.map((skill, index) => (
                                        <span key={index}>
                                            {skill}{index !== job.skills.length - 1 && "  +  "}
                                        </span>
                                    ))}
                                </p>
                            </div>
                            <div>
                                <p>
                                    <Icons.work /> {job.workMode}
                                </p>
                            </div>
                            <div id="button-cont">
                                <button className="view-btn"
                                >View Details</button>
                                <button className="view-btn">Apply Job</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );

};

export default FilteredJobs;
