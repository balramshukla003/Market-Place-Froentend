import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy</h1>
      <p style={styles.lastUpdated}>Last Updated: 22-11-2024</p>

      <section style={styles.section}>
        <h2 style={styles.heading}>Introduction</h2>
        <p style={styles.text}>
          Welcome to Market Place's Privacy Policy. This document outlines how we collect,
          use, and protect your personal information when you use our services. This is a dummy
          policy for demonstration purposes only.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Information We Collect</h2>
        <p style={styles.text}>We may collect the following types of information:</p>
        <ul style={styles.list}>
          <li>Personal identification information (Name, email address, phone number)</li>
          <li>Demographic information (age, gender, location)</li>
          <li>Technical data (IP address, browser type, device information)</li>
          <li>Usage data (pages visited, features used, time spent)</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>How We Use Your Information</h2>
        <p style={styles.text}>Your information may be used for:</p>
        <ul style={styles.list}>
          <li>Providing and maintaining our services</li>
          <li>Improving user experience</li>
          <li>Communicating with users</li>
          <li>Security and fraud prevention</li>
          <li>Legal compliance</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Data Sharing</h2>
        <p style={styles.text}>
          We do not sell your personal information. We may share data with:
        </p>
        <ul style={styles.list}>
          <li>Service providers and business partners</li>
          <li>Legal authorities when required</li>
          <li>Third parties during business transfers</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Your Rights</h2>
        <p style={styles.text}>You have the right to:</p>
        <ul style={styles.list}>
          <li>Access your personal data</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of communications</li>
          <li>Withdraw consent</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Security Measures</h2>
        <p style={styles.text}>
          We implement security measures including encryption, access controls, and regular
          security audits to protect your data. However, no electronic transmission is completely
          secure.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Cookies</h2>
        <p style={styles.text}>
          We use cookies and similar technologies to enhance your experience. You can manage cookie
          preferences through your browser settings.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Policy Changes</h2>
        <p style={styles.text}>
          We may update this policy periodically. Changes will be posted on this page with an
          updated revision date.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Contact Us</h2>
        <p style={styles.text}>
          For privacy-related inquiries, contact us at:<br />
          Email: <a href="support@marketplace.com" style={styles.link}>privacy@example.com</a>
        </p>
      </section>

      <div style={styles.disclaimer}>
        <em>
          Note: This is a template privacy policy for demonstration purposes only and does not
          constitute legal advice. Consult a legal professional to create a compliant privacy policy
          for your organization.
        </em>
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: '0 auto',
    padding: '2rem',
    lineHeight: '1.6'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    color: '#2c3e50'
  },
  lastUpdated: {
    color: '#7f8c8d',
    marginBottom: '2rem'
  },
  section: {
    marginBottom: '2rem'
  },
  heading: {
    fontSize: '1.5rem',
    color: '#34495e',
    margin: '1.5rem 0 1rem'
  },
  text: {
    margin: '0.5rem 0',
    color: '#2c3e50'
  },
  list: {
    paddingLeft: '1.5rem',
    margin: '1rem 0'
  },
  link: {
    color: '#2980b9',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  disclaimer: {
    marginTop: '2rem',
    padding: '1rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '4px',
    color: '#7f8c8d'
  }
};

export default PrivacyPolicy;