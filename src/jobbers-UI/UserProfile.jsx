import React, { useContext, useEffect, useState } from 'react';
import '../css/UserProfile.css';
import { Link, useNavigate } from 'react-router-dom';
import ProfileDetail from '../jobbers-UI/ProfileDetail';
import profile from '../assets/jobBg.jpg'
import { AuthContext } from '../context/AuthProvider';

const UserProfile = () => {

  const { authUser, userLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userLoggedIn === false) {
      navigate('/login')
    }
  })


  const [activeLink, setActiveLink] = useState('basic');

  const renderContent = () => {
    switch (activeLink) {
      case 'basic':
        return <ProfileDetail title='Personal' />;
      case 'education':
        return <ProfileDetail title='Education' />;
      case 'skills':
        return <ProfileDetail title='Skills' />;
      case 'work':
        return <ProfileDetail title='Experience' />;
      case 'projects':
        return <ProfileDetail title='Projects' />;
      case 'accomplishments':
        return <ProfileDetail title='Accomplishment' />;
      case 'resume':
        return <ProfileDetail title='Resume' />;
      default:
        return <div>Select a section from the menu.</div>;
    }
  };

  return (
    <div className="profile-outer">
      <div className="profile-left-side">
        <div className="pic-section">
          <img src={profile} alt="profile-pic" />
          <h5>{authUser.name || "NA"}</h5>
          <p>{authUser.email || "NA"}</p>
        </div>
        <div className="other-links">
          <Link
            to="#"
            className={`${activeLink === 'basic' ? 'active' : ''}`}
            onClick={() => setActiveLink('basic')}
          >
            Basic Details
          </Link>
          <Link
            to="#"
            className={`${activeLink === 'education' ? 'active' : ''}`}
            onClick={() => setActiveLink('education')}
          >
            Education Details
          </Link>
          <Link
            to="#"
            className={`${activeLink === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveLink('skills')}
          >
            Skill, Subjects & Language
          </Link>
          <Link
            to="#"
            className={`${activeLink === 'work' ? 'active' : ''}`}
            onClick={() => setActiveLink('work')}
          >
            Intern & Work Ex
          </Link>
          <Link
            to="#"
            className={`${activeLink === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveLink('projects')}
          >
            Projects
          </Link>
          <Link
            to="#"
            className={`${activeLink === 'accomplishments' ? 'active' : ''}`}
            onClick={() => setActiveLink('accomplishments')}
          >
            Accomplishments
          </Link>
          <Link
            to="#"
            className={`${activeLink === 'resume' ? 'active' : ''}`}
            onClick={() => setActiveLink('resume')}
          >
            Resume, Doc & Write ups
          </Link>
        </div>
      </div>

      <div className="profile-right-side">{renderContent()}</div>
    </div>
  );
};

export default UserProfile;
