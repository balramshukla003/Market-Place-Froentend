import { useContext } from 'react';
import AuthProvider, { AuthContext } from './context/AuthProvider.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './actual-UI/Navbar.jsx';
import Footer from './actual-UI/Footer.jsx';
import Landing from './actual-UI/Landing.jsx';
import Login from './actual-UI/Login.jsx';
import Register from './actual-UI/Register.jsx';
import Careers from './actual-UI/Careers.jsx';
import Job_Search from './actual-UI/Job_Search.jsx';
import JobSeekerUI from './jobbers-UI/JobSeekerUI.jsx';
import Profile from './jobbers-UI/UserProfile.jsx';
import Example from './jobbers-UI/EditDetails.jsx';
import Jobber_Navbar from './jobbers-UI/Jobber_Navbar.jsx';
import RecruiterDashboard from './recruiters-UI/RecruitersDashboard.jsx';
import RecruiterNav from './recruiters-UI/recruiterNav.jsx';
import ContactPage from './actual-UI/Contact.jsx';
import AboutUs from './actual-UI/About.jsx';


const DynamicComponent = ({ children }) => {
  const { userLoggedIn, authUser } = useContext(AuthContext);

  if (userLoggedIn) {
    if (authUser.type === 'job-seeker') {
      return (
        <>
          <Jobber_Navbar />
          {children || <JobSeekerUI />}
          <Footer />
        </>
      );
    }

    if (authUser.type === 'recruiter') {
      return (
        <>
          <RecruiterNav />
          {children || <RecruiterDashboard />}
          <Footer />
        </>
      );
    }
  } else {
    return (
      <>
        <Navbar />
        {children || <Landing />}
        <Footer />
      </>
    );
  }
};


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DynamicComponent />} />
          <Route path="/job_search" element={<DynamicComponent > <Job_Search /> </DynamicComponent >} />
          <Route path="/careers" element={<DynamicComponent > <Careers /> </DynamicComponent>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/profile" element={<DynamicComponent><Profile /></DynamicComponent>} />
          <Route path="/contact" element={<DynamicComponent ><ContactPage /></DynamicComponent>} />
          <Route path="/about" element={<DynamicComponent><AboutUs /></DynamicComponent>} />
          <Route path='/example' element={<Example />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
