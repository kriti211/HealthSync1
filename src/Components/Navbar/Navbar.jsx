

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './Navbar.css';
import React from 'react';

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // Load user from localStorage when the component mounts
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                if (parsedUser && parsedUser.exp * 1000 > Date.now()) {
                    setUser(parsedUser);
                } else {
                    localStorage.removeItem('user'); // Remove expired session
                }
            } catch (error) {
                console.error("Error parsing stored user:", error);
                localStorage.removeItem('user');
            }
        }
    }, []);

    const handleSuccess = async (credentialResponse) => {
        try {
            const decodedUser = jwtDecode(credentialResponse.credential);
            setUser(decodedUser);
            localStorage.setItem('user', JSON.stringify(decodedUser));
    
            // Send user email to backend
            await fetch("http://localhost:5000/api/store-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: decodedUser.email }),
            });
        } catch (error) {
            console.error("Error decoding token:", error);
        }
    };
    

    const handleError = () => {
        console.log("Google Sign In Error");
    };

    const handleLogout = () => {
        googleLogout();
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        
        <>
        {console.log(user)}
            {/* Navbar Section */}
            <nav className='nav'>
                <div className='nav-logo' onClick={() => navigate("/")}>FitIndia</div>
                <ul className='nav-menu'>
                    <li><button type="button" onClick={() => navigate("/")}>Home</button></li>
                    <li><button type="button" onClick={() => navigate("/about")}>About Us</button></li>
                    <li><button type="button" onClick={() => navigate("/contact-us")}>Contact Us</button></li>

                    <li className='nav-login'>
                        {user ? (
                            <div className="user-container">
                                <span className="user-name">{user.name}</span>
                                <Button type="primary" danger onClick={handleLogout}>
                                    Logout
                                </Button>
                            </div>
                        ) : ( ""
                            // <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
                        )}
                    </li>
                </ul>
            </nav>

            {/* Show FitnessForm only if user is logged in */}
            {/* {user && <FitnessForm email={user.email}/>} */}
        </>
    );
};

export default Navbar;
