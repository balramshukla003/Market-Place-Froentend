import { useState } from 'react';
import '../css/EditDetails.css';

const EditDetails = ({ onUpdate, Visible }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        gender: '',
        institute: '',
        email: '',
        phone: '',
        currentAddress: '',
        permanentAddress: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(false);
    };

    return (
        Visible && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Edit Profile</h2>
                        <button className="close-btn" onClick={() => onUpdate(false)}>
                            &times;
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-section">
                            <h3>Personal Information</h3>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Date of Birth</label>
                                    <input
                                        type="date"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Gender</label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                    >
                                        <option defaultValue="select">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Current Institute</label>
                                    <input
                                        type="text"
                                        name="institute"
                                        value={formData.institute}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-section">
                            <h3>Address</h3>
                            <div className="form-group">
                                <label>Current Address</label>
                                <input
                                    type="text"
                                    name="currentAddress"
                                    value={formData.currentAddress}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Permanent Address</label>
                                <input
                                    type="text"
                                    name="permanentAddress"
                                    value={formData.permanentAddress}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <button type="submit" className="submit-btn">
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        )
    );
};

export default EditDetails;
