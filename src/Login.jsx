import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import FitnessForm from "./Components/Fitnessform";

const Login = () => {
  const [user, setUser] = useState(null); // Store user data

  const handleSuccess = (credentialResponse) => {
    console.log("Google Sign In Success", credentialResponse);
    const decodedUser = jwtDecode(credentialResponse?.credential);
    console.log(decodedUser);
    setUser(decodedUser); // Store user details in state
  };

  const handleError = () => {
    console.log("Google Sign In Error");
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null); // Clear user state on logout
    console.log("User logged out");
  };

  return (
    <GoogleOAuthProvider clientId="1072788932205-42fhbo683l5945r02o63tir74ttu49s6.apps.googleusercontent.com">
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="text-2xl font-bold text-blue-500">
          {user ? "Welcome, " + user.name : "Google Sign In"}
        </h1>

        {/* Show Login Button if User is Not Logged In */}
        {!user ? (
          <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
        ) : (
          <>
            {/* Show Logout Button and User Info */}
            <div className="mt-4 text-center">
              <img src={user.picture} alt="User Profile" className="rounded-full w-16 h-16 mx-auto" />
              <p className="font-bold">{user.name}</p>
            </div>
            <button
              onClick={handleLogout}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>

            <FitnessForm />
          </>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
