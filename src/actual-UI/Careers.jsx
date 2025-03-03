import React from 'react';
import '../css/Careers.css';
import Image from '../assets/image.jpg';
import { Link } from 'react-router-dom';

const Careers = () => {

  const Openings = () => {
    alert('No Openings are Right-Now!')
  }
  return (
    <div className="careers-outer">

      <div className="carrers-cont" style={{ backgroundImage: `url(${Image})`, backgroundAttachment: 'fixed' }}>
        <div className="careers-text">
          <h3 className="careers-heading">CAREERS</h3>
          <p style={{
            fontFamily: 'Houschka-medium',
            fontStyle: 'normal',
            fontSize: '4rem',
            lineHeight: '4rem',
            marginBottom: ' 2pc',
            width: '75%'
          }} className="careers-para">
            Build a future you belive in</p>
          <h5>We are always looking for talented individuals to join our team.</h5>
          <Link to="" className="careers-link" onClick={Openings}>View Openings</Link>
        </div>
      </div>


    </div >
  );
};

export default Careers;