import { useState } from "react";
import { LANG } from "./utils/langConfig";
import "./ContactUs.css";

const Contact = ({ lang }) => {
  const data = LANG["en"].contact;
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setShowMessage(true); // Show the message when the form is submitted
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit}>
        <p>{data.desc}</p>
        <label>
          {data.nameLabel}
          <input type="text" name="name" required />
        </label>
        <label>
          {data.emailLabel}
          <input type="email" name="email" required />
        </label>
        <label>
          {data.messageLabel}
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">{data.submitButton}</button>
      </form>
      {showMessage && ( // Conditionally render the message
        <p className="confirmation-message">
          We will come back to you later, thanks for reaching out!
        </p>
      )}
    </div>
  );
};

export default Contact;
