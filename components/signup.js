import React from "react";
import "@/styles/signup.css";
import Link from "next/link";
import { Image } from "@chakra-ui/react";

const SignUp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} className="close-button">
          X
        </button>
        <h2 className="sign-form-title">Sign up for Tripma</h2>
        <p className="sign-form-desc">
          Tripma is totally free to use. Sign up using your email address or
          phone number below to get started.
        </p>
        <form>
          <input type="text" placeholder="Email or phone number" required />
          <input type="password" placeholder="Password" required />
          <label className="sign-form-check">
            <input type="checkbox" />I agree to the
            <Link href="#" passHref>
              terms and conditions
            </Link>
          </label>

          <label className="sign-form-check">
            <input type="checkbox"  />
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
        <div className="div-social">
          <button className="social-media-btn" type="submit">
            <Image src="/social-media/google.svg" alt="Logo" className="social-icon"  />
            <span className="btn-text">Continue with Google</span>
            </button>
        </div>
        <div className="div-social">
          <button className="social-media-btn" type="submit">
            <Image src="/social-media/apple.svg" alt="Logo" className="social-icon" />
            <span className="btn-text">Continue with Apple</span>          </button>
        </div>
        <div className="div-social">
          <button className="social-media-btn" type="submit">
            <Image src="/social-media/facebook.svg" alt="Logo" className="social-icon"  />
            <span className="btn-text">Continue with Facebook</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
