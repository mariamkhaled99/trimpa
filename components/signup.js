import React from "react";

const SignUp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} className="close-button">
          X
        </button>
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button onClick={handleOpenSignUp}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
