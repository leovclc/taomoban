import React from "react";
import '../assets/vendor/animate.css/animate.min.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css'
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/css/style.css';
import { useState } from 'react';

function NavigationBar() {

    const [currentUrl, setCurrentUrl] = useState(window.location.pathname);

    function handleClick(e) {
        setCurrentUrl(e.target.pathname);
    }

    return(
        <>
    <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
            <a href="/">Green Journey</a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
        <nav id="navbar" className="navbar">
            <ul>
            <li>
                <a className={currentUrl === "/" ? "nav-link scrollto active" : "nav-link scrollto"} href="/">
                Home
                </a>
            </li>
            <li>
                <a className={currentUrl === "/footprint" ? "nav-link scrollto active" : "nav-link scrollto"} href="/footprint">
                Footprint
                </a>
            </li>
            <li>
                <a className={currentUrl === "/travel" ? "nav-link scrollto active" : "nav-link scrollto"} href="/travel">
                Travel
                </a>
            </li>
            <li>
                <a className={currentUrl === "/test" ? "nav-link scrollto active" : "nav-link scrollto"} href="/test">
                Test
                </a>
            </li>
            <li>
                <a className={currentUrl === "/education" ? "nav-link scrollto active" : "nav-link scrollto"} href="/education">
                Education
                </a>
            </li>
            
            <li className="dropdown">
                <a href="#">
                <span>Infomation</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                <li>
                    <a href="#">State Information</a>
                </li>
                
                <li>
                    <a href="#">Transport Information</a>
                </li>
               
                </ul>
            </li>
            <li>
                <a className="nav-link scrollto" href="#contact">
                Contact
                </a>
            </li>
            <li>
                <a className="getstarted scrollto" href="#about">
                Get Started
                </a>
            </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        {/* .navbar */}
        </div>
    </header>
    {/* End Header */}
    </>


    );
}

export default NavigationBar;