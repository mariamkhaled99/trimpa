import React from "react";
import "@/styles/signup.css";
import Link from "next/link";

const SignUp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} className="close-button">
          X
        </button>
        <h2>Sign up for Tripma</h2>
        <p>
          Tripma is totally free to use. Sign up using your email address or
          phone number below to get started.
        </p>
        <form>
          <input type="text" placeholder="Email or phone number" required />
          <input type="password" placeholder="Password" required />
          <label>
            <input type="checkbox" />I agree to the
            <Link href="#" passHref>
              terms and conditions
            </Link>
          </label>

          <label>
            <input type="checkbox" />
            Send me the latest deal alerts
          </label>
          <button className="Create-account-btn" type="submit">
            Create account
          </button>
        </form>
        <div className="hr-container">
          <hr className="hr-line" />
          <span className="hr-text">or</span>
          <hr className="hr-line" />
        </div>
        <div >
        <button className="social-media-btn" type="submit">
            Continue with Google 
          </button>
          
          </div>
          <div >
          <button className="social-media-btn" type="submit">
          Continue with Apple
          </button>
          </div>
          <div >
          <button className="social-media-btn" type="submit">
            Create account
          </button>
          </div>
       
      </div>
    </div>
  );
};

export default SignUp;
