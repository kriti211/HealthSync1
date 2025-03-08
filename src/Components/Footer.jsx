import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            {/* Social Icons */}
            <div className="footer-icons">
                <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>

            {/* Navigation Links */}
            <ul className="footer-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Our Team</a></li>
            </ul>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} FitIndia. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;



