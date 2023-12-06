import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Contact from './Contact'
import About from './About';
import Footer from './Footer';
import Header from './Header';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
  <div className="App">
    <Header/>

<nav className='nav-container'>
        <Link to = "/" className="nav">Home</Link>
        <Link to="/about" className="nav">About</Link>
        <Link to="/contact" className="nav">Contact us</Link>
        <Link to="/booking-page" className="nav">Booking</Link>
     </nav>

     <Routes>
     < Route path="/" element={<Home /> } />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/booking-page" element={<BookingPage />} />
     <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
     </Routes>
    <Footer />
    </div>
  );
}

export default App;
