// import { useState, useEffect } from "react";
// import { MENU_API } from "../utils/constants";

// const useRestaurantMenu = (resId) => {
//   console.log("useRestaurantMenu reached");
//   const [restInfo, setRestInfo] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchRestaurantMenu = async () => {
//     console.log("fetchRestaurantMenu called");
//     console.log("menu url", MENU_API + resId + "&submitAction=ENTER");
//     const data = await fetch(MENU_API + resId + "&submitAction=ENTER");
//     const json = await data.json();
//     console.log("menu url", MENU_API + resId + "&submitAction=ENTER");
//     console.log("Restaurant menu info", json);
//     setRestInfo(json.data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     console.log("useRestaurantMenu reached");
//     fetchRestaurantMenu();
//   }, [resId]);

//   return { restInfo, loading };
// };

// export default useRestaurantMenu;
import { useState, useEffect } from "react";
import { FOODFIRE_MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  console.log("useRestaurantMenu reached");
  const [restInfo, setRestInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect reached");
    if (resId) {
      fetchRestaurantMenu();
    }
  }, [resId]);

  const fetchRestaurantMenu = async () => {
    try {
      console.log("fetchRestaurantMenu called");
      const response = await fetch(
        FOODFIRE_MENU_API_URL + resId + "&submitAction=ENTER"
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const json = await response.json();
      console.log("Restaurant menu info", json);
      setRestInfo(json.data);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    } finally {
      setLoading(false);
    }
  };

  return { restInfo, loading };
};

export default useRestaurantMenu;
