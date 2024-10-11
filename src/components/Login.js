import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { LANG } from "./utils/langConfig";

const Login = ({ lang }) => {
  const data = LANG["en"].login;
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error messages
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsLoggedIn(true);
    navigate("/"); // Redirect to home page

    // // Simple validation (you can replace this with your actual validation logic)
    // if (email === "user@example.com" && password === "password123") {
    //   // If validation passes, navigate to the home page
    //   navigate("/"); // Redirect to home page
    // } else {
    //   // If validation fails, set an error message
    //   setError("Invalid email or password");
    // }
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Reset login state
    setEmail(""); // Clear email field
    setPassword(""); // Clear password field
  };

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <label>
            {data.emailLabel}
            <input
              type="text"
              name="email"
              value={email} // Controlled input
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
            />
          </label>
          <label>
            {data.passwordLabel}
            <input
              type="password" // Changed to password type for security
              name="password"
              value={password} // Controlled input
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required
            />
          </label>
          <button type="submit">{data.submitButton}</button>
        </form>
      ) : (
        <div>
          <p>You are logged in!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Display error message if any */}
    </div>
  );
};

export default Login;
