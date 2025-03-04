import React, { useContext, useEffect, useState } from 'react'
import '../css/ProfileDetail.css'
import { AuthContext } from '../context/AuthProvider';
import Icons from '../actual-UI/Icons.jsx'
import EditDetails from '../jobbers-UI/EditDetails.jsx'
import { useNavigate } from 'react-router-dom';

const ProfileDetail = (props) => {

    const { authUser, userLoggedIn } = useContext(AuthContext);
  
    const [visible, setVisisble] = useState(false);

    const EditProfile = () => {
        setVisisble(!visible);
    }

    const updateData = (newData) => {
        setVisisble(newData);
    };

    if (props.title == "Personal") {
        return (
            <div className="profile-detail">
                <section className="profile-section">
                    <div className="section-head"><h4>Personal Information</h4><button onClick={EditProfile}> <Icons.edit />  edit</button></div>
                    <div className="type-data">
                        <div className="Type" >
                            <p>Full Name :</p>
                            <p>Date of Birth :</p>
                            <p>Gender :</p>
                            <p>Current Institute :</p>
                            <p>Email :</p>
                            <p>Phone :</p>
                        </div>
                        <div className="Data">
                            <p>Balram Shukla</p>
                            <p>22.02.2004</p>
                            <p>Male</p>
                            <p>MSITM</p>
                            <p>balramshukla@gmail.com</p>
                            <p>+91 9026050563</p>
                        </div>
                    </div>
                </section>
                <section className="profile-section">
                    <div className="section-head"><h4>Address</h4><button onClick={EditProfile}> <Icons.edit />  edit</button></div>
                    <div className="type-data">
                        <div className="Type" >
                            <p>Current address :</p>
                            <p>Permanent address :</p>
                        </div>
                        <div className="Data">
                            <p>Sec 6 Vaishali, Ghaziabad, UP-Delhi</p>
                            <p> Ghaziabad, UP-Delhi</p>
                        </div>
                    </div>
                </section>
                {visible && <EditDetails onUpdate={updateData} Visible={visible} />}
            </div>
        );

    } else if (props.title == "Education") {
        return (
            <div className="profile-detail">
                <section className="profile-section">
                    <div className="section-head"><h4>Current Education</h4><button onClick={EditProfile}> <Icons.edit />  edit</button></div>
                    <div className="type-data">
                        <div className="Type" >
                            <p>Institute :</p>
                            <p>Department :</p>
                            <p>Program / Degree :</p>
                            <p>Brach / Passing-year:</p>
                            <p>Grade :</p>
                            <p>Institution Addres :</p>
                        </div>
                        <div className="Data">
                            <p>MSITM</p>
                            <p>Computer Science & Engineering</p>
                            <p>Bachelor's Degree</p>
                            <p>B.C.A / 2025</p>
                            <p>75+</p>
                            <p>Sec 6, Vaishali, Ghaziabad</p>
                        </div>
                    </div>
                </section>
                <section className="profile-section">
                    <div className="section-head"><h4>Previous Education</h4><button onClick={EditProfile}>+add new</button></div>
                    <div className="type-data">
                        <div className="Type" >
                            <p>Institute :</p>
                            <p>Department :</p>
                            <p>Program/Degree :</p>
                            <p>Brach:</p>
                            <p>Institution Addres :</p>
                        </div>
                        <div className="Data">
                            <p>MSITM</p>
                            <p>Computer Science & Engineering</p>
                            <p>Bachelor's Degree</p>
                            <p>B.C.A</p>
                            <p>Sec 6, Vaishali, Ghaziabad</p>
                        </div>
                    </div>
                </section>
            </div>
        );

    } else if (props.title === 'Skills') {
        return (
            <div className="profile-detail">
                <section className="profile-section">
                    <div className="section-head"><h4>Technical Skills</h4><button onClick={EditProfile}> <Icons.edit />  edit</button></div>
                    <div className="type-data">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Java</li>
                            <li>JDBC</li>
                            <li>DBMS</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MySQL</li>
                            <li>C++</li>
                        </ul>
                    </div>
                </section>
                <section className="profile-section">
                    <div className="section-head"><h4>Soft Skills</h4><button onClick={EditProfile}> <Icons.edit />  edit</button></div>
                    <div className="type-data">
                        <ul>
                            <li>communication</li>
                            <li>communication</li>
                            <li>communication</li>
                            <li>communication</li>
                            <li>communication</li>
                            <li>communication</li>
                            <li>communication</li>
                        </ul>
                    </div>
                </section>
                <section className="profile-section">
                    <div className="section-head"><h4>Languages</h4><button> <Icons.edit onClick={EditProfile} />  edit</button></div>
                    <div style={{ paddingLeft: "20px" }} className="type-data">
                        <div className="Type">
                            <p>Hindi :</p>
                        </div>
                        <div className="Data" >
                            <p>Intermediate</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    } else {
        return (
            <div className="profile-out">
                <h1>🚀 Coming Soon</h1>
                <p>We’re working hard to bring you something amazing! Stay tuned for  <Icons.edit />  edits.</p>
            </div>
        );
    }
}

export default ProfileDetail
