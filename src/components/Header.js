import { LOGO_URL } from "./utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  const handleClick = () => {
    setBtnName((prevBtnName) => (prevBtnName === "Login" ? "Logout" : "Login"));
  };

  return (
    <div className="flex justify-between bg-gray-200">
      <div className="m-2 p-2">
        <img className="w-12" src={LOGO_URL} alt="Meal Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4">
          <li className="px-4  text-gray-500 font-bold">
            Online Status : {onlineStatus ? "✅ " : "❌"}
          </li>
          <li className="px-4  text-gray-500 font-bold hover:bg-green-500 hover:px-3 hover:py-2 transition-all duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4  text-gray-500 font-bold  hover:bg-green-500 hover:px-3 hover:py-2 transition-all duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4  text-gray-500 font-bold  hover:bg-green-500 hover:px-3 hover:py-2 transition-all duration-300">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4  text-gray-500 font-bold  hover:bg-green-500 hover:px-3 hover:py-2 transition-all duration-300">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          {/* <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          {/* <li className="px-4 font-bold  text-gray-500">{loggedInUser}</li> */}
          <button
            className="px-4 font-bold  text-gray-500  hover:bg-green-500 hover:px-3 hover:py-2 transition-all duration-300"
            onClick={handleClick}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
