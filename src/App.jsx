import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider, { AuthContext } from './context/AuthProvider.jsx';
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
import FilterProvider from './context/FilterProvider.jsx';
import ActiveProvider from './context/ActiveProvider.jsx';

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
          <ActiveProvider>
            <RecruiterNav />
            {children || <RecruiterDashboard />}
            <Footer />
          </ActiveProvider>
        </>
      );
    }
  }

  // Default to unauthenticated UI
  return (
    <>
      <Navbar />
      {children || <Landing />}
      <Footer />
    </>
  );
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<DynamicComponent />} />
    <Route path="/job_search" element={<DynamicComponent><Job_Search /></DynamicComponent>} />
    <Route path="/careers" element={<DynamicComponent><Careers /></DynamicComponent>} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/user/profile" element={<DynamicComponent><Profile /></DynamicComponent>} />
    <Route path="/contact" element={<DynamicComponent><ContactPage /></DynamicComponent>} />
    <Route path="/about" element={<DynamicComponent><AboutUs /></DynamicComponent>} />
    <Route path="/example" element={<Example />} />
  </Routes>
);

const App = () => {
  return (

    <FilterProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </FilterProvider>
  );
};

export default App;
