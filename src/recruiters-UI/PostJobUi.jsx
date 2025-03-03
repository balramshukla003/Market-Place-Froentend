import React, { useState } from 'react';
import '../css/PostJobUi.css';

const PostJobUi = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        jobProfile: "",
        jobDesignation: "",
        companyName: "",
        salary: "",
        experience: "",
        location: "",
        education: "",
        companyLogo: null,
        jobDescription: "",
        skills: [],
        jobType: "",
        benefits: "",
        workMode: ""
    });

    const [currentSkill, setCurrentSkill] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, companyLogo: e.target.files[0] });
    };

    const handleSkillAdd = (e) => {
        e.preventDefault();
        if (currentSkill.trim() && !formData.skills.includes(currentSkill)) {
            setFormData({
                ...formData,
                skills: [...formData.skills, currentSkill.trim()]
            });
            setCurrentSkill("");
        }
    };

    const handleSkillRemove = (skillToRemove) => {
        setFormData({
            ...formData,
            skills: formData.skills.filter(skill => skill !== skillToRemove)
        });
    };

    const handlePostJob = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("http://localhost:5000/insertJob", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            setLoading(false);

            if (response.ok) {
                console.log(response.message, response.data);
                setError("Job Posted Successfully");
                alert("Job Posted Successfully");

                setFormData({
                    jobProfile: "",
                    jobDesignation: "",
                    companyName: "",
                    salary: "",
                    experience: "",
                    location: "",
                    education: "",
                    companyLogo: null,
                    jobDescription: "",
                    skills: [],
                    jobType: "",
                    benefits: "",
                    workMode: ""
                })


            } else {
                setError(data.error || "Server error.");
                alert(data.error || "Server error.");
            }
        } catch (err) {
            setLoading(false);
            setError("Failed to connect to the server. Please try again later.");
            console.error(err);
            alert("Failed to connect to the server. Please try again later.");
        }
    };




    return (
        <div className="jobbers-section">
            <div className="form-container">
                <form onSubmit={handlePostJob} className="job-form">
                    {/* Basic Details Section */}
                    <div className="form-group">
                        <h3>Basic Details</h3>
                        <div className="form-grid">
                            <div className="form-section">
                                <label htmlFor="jobProfile">Job Profile</label>
                                <input
                                    type="text"
                                    id="jobProfile"
                                    name="jobProfile"
                                    value={formData.jobProfile}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-section">
                                <label htmlFor="jobDesignation">Job Designation</label>
                                <input
                                    type="text"
                                    id="jobDesignation"
                                    name="jobDesignation"
                                    value={formData.jobDesignation}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-section">
                                <label htmlFor="companyName">Company Name</label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    value={formData.
                                        companyName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-section">
                                <label htmlFor="companyLogo">Company Logo</label>
                                <input
                                    type="file"
                                    id="companyLogo"
                                    name="companyLogo"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="form-group">
                        <h3>Required Skills</h3>
                        <div className="skills-section">
                            <div className="skill-input">
                                <input
                                    type="text"
                                    value={currentSkill}
                                    onChange={(e) => setCurrentSkill(e.target.value)}
                                    placeholder="Add a skill"
                                />
                                <button
                                    type="button"
                                    onClick={handleSkillAdd}
                                    className="add-skill-btn"
                                >
                                    Add
                                </button>
                            </div>
                            <div className="skills-list">
                                {formData.skills.map((skill, index) => (
                                    <div key={index} className="skill-tag">
                                        {skill}
                                        <span
                                            onClick={() => handleSkillRemove(skill)}
                                            className="remove-skill"
                                        >
                                            ×
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Additional Details Section */}
                    <div className="form-group">
                        <h3>Additional Details</h3>
                        <div className="form-grid">
                            <div className="form-section">
                                <label htmlFor="salary">Salary (Annual)</label>
                                <input
                                    type="text"
                                    id="salary"
                                    name="salary"
                                    value={formData.salary}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-section">
                                <label htmlFor="experience">Experience</label>
                                <input
                                    type="text"
                                    id="experience"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-section">
                                <label htmlFor="location">Location</label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-section">
                                <label htmlFor="education">Education</label>
                                <input
                                    type="text"
                                    id="education"
                                    name="education"
                                    value={formData.education}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-section">
                                <label htmlFor="jobType">Job Type</label>
                                <select
                                    id="jobType"
                                    name="jobType"
                                    value={formData.jobType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Job Type</option>
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Internship">Internship</option>
                                </select>
                            </div>
                            <div className="form-section">
                                <label htmlFor="workMode">Work Mode</label>
                                <select
                                    id="workMode"
                                    name="workMode"
                                    value={formData.workMode}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Work Mode</option>
                                    <option value="On-site">On-site</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div className="form-group">
                        <div className="form-section">
                            <label htmlFor="jobDescription">Job
                                jobDescription</label>
                            <textarea
                                id="jobDescription"
                                name="jobDescription"
                                value={formData.
                                    jobDescription}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="form-section">
                            <label htmlFor="benefits">Benefits</label>
                            <textarea
                                id="benefits"
                                name="benefits"
                                value={formData.benefits}
                                onChange={handleChange}
                                placeholder="e.g., Health insurance, Paid time off, etc."
                            ></textarea>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="submit-button">
                            Post Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostJobUi;