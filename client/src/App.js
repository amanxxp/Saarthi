import { useState } from 'react'
import Landing from './Pages/Landing';
import './index.css';
import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



import Jobs from './Pages/Jobs';
import Schemes from './Pages/SchemesPage';
import SchemeCard from './components/SchemeCard';
import JobCard from './components/JobCard';
import SchemesPage from './Pages/SchemesPage';

import SignUp_card from './components/SignUp_card';
import SignupPage from './Pages/Signuppage';
import Health from './Pages/Health';
import Community from './Pages/Community';
import LoginPage from './Pages/Login';


const App = () => {
  return (
  //   <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
  // <Login/>
  //   </div>
  



  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} /> 
      <Route path="/register" element={ <SignupPage />} />
      <Route path="/" element={ <Landing />} />
      <Route path="/jobs" element={ <Jobs />} />
      <Route path="/health" element={ <Health />} />
      <Route path="/policies" element={ <SchemesPage />} />
      <Route path="/community" element={ <Community />} />

    </Routes>
  </Router>
    );
};

export default App;
