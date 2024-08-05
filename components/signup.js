import React from "react";
import "@/styles/signup.css";
import Link from "next/link";
import { Image } from "@chakra-ui/react";

const SignUp = ({ isOpen, onClose }) => {
  // If the modal is not open, return null to hide it
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        {/* Close button to hide the modal */}
        <button onClick={onClose} className="close-button">
          X
        </button>

        {/* Title of the sign-up form */}
        <h2 className="sign-form-title">Sign up for Tripma</h2>

        {/* Description of the sign-up process */}
        <p className="sign-form-desc">
          Tripma is totally free to use. Sign up using your email address or
          phone number below to get started.
        </p>

        {/* Sign-up form */}
        <form>
          <input type="text" placeholder="Email or phone number" required />
          <input type="password" placeholder="Password" required />

          {/* Checkbox for agreeing to terms and conditions */}
          <label className="sign-form-check">
            <input type="checkbox" />I agree to the
            <Link href="#" passHref>
              terms and conditions
            </Link>
          </label>

          {/* Checkbox for receiving deal alerts */}
          <label className="sign-form-check">
            <input type="checkbox" />
            Send me the latest deal alerts
          </label>

          {/* Submit button for creating account */}
          <button className="Create-account-btn" type="submit">
            Create account
          </button>
        </form>

        {/* Horizontal rule with 'or' text in the middle */}
        <div className="hr-container">
          <hr className="hr-line" />
          <span className="hr-text">or</span>
          <hr className="hr-line" />
        </div>

        {/* Social media sign-up options */}
        <div className="div-social">
          <button className="social-media-btn" type="submit">
            <Image
              src="/social-media/google.svg"
              alt="Google"
              className="social-icon"
            />
            <span className="btn-text">Continue with Google</span>
          </button>
        </div>

        <div className="div-social">
          <button className="social-media-btn" type="submit">
            <Image
              src="/social-media/apple.svg"
              alt="Apple"
              className="social-icon"
            />
            <span className="btn-text">Continue with Apple</span>
          </button>
        </div>

        <div className="div-social">
          <button className="social-media-btn" type="submit">
            <Image
              src="/social-media/facebook.svg"
              alt="Facebook"
              className="social-icon"
            />
            <span className="btn-text">Continue with Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
