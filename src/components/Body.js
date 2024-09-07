import RestaurantCard, { withPromotedRestaurantCard } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { MEAL_MINGLE_LIST_API } from "./utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredSearchList, setFilteredSearchList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  const onlineStatus = useOnlineStatus();
  const PromoteRestaurantCard = withPromotedRestaurantCard(RestaurantCard);
  const { setUserName, loggedInUser } = useContext(UserContext);
  console.log("on page load loading state:", loading);
  useEffect(() => {
    fetchData();
  }, []);

  const checkJsonData = (jsonData) => {
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
      const checkData =
        jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (checkData) {
        return checkData;
      }
    }
    return [];
  };

  const fetchData = async () => {
    try {
      const response = await fetch(MEAL_MINGLE_LIST_API);
      const json = await response.json();
      const resData = checkJsonData(json);

      setRestaurants(resData);
      setFilteredSearchList(resData);
      setLoading(false);
      console.log("data fetched:", resData);
      console.log("loading state:", loading);
    } catch (error) {
      console.error("Failed to fetch", error);
      setFilteredSearchList([]);
      setRestaurants([]);
    } finally {
      setLoading(false);
      console.log("finaly loading state:", loading);
    }
  };

  if (onlineStatus === false) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <h1 className="text-center font-bold text-red-600 pt-20">
          Looks like you are offline...
        </h1>
      </div>
    );
  }

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex flex-col md:flex-row justify-between items-center">
        <div className="search flex items-center space-x-4 m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-lg px-4 py-2"
            placeholder="Search Restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
            onClick={() => {
              const filteredSearchedData = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredSearchList(filteredSearchedData);
            }}
          >
            Search
          </button>
        </div>
        <div className="search flex items-center space-x-4 m-4 p-4">
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded-lg"
            onClick={() => {
              const filteredListOfRestaurants = restaurants.filter(
                (res) => res.info?.avgRating >= 4.5
              );
              setFilteredSearchList(filteredListOfRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
          {/* <div className="flex items-center space-x-2">
            <label className="text-gray-700">User Name:</label>
            <input
              type="text"
              className="border border-black rounded-lg px-4 py-2 bg-gray-100"
              placeholder="Enter your name"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div> */}
        </div>
      </div>

      <div className="flex flex-wrap">
        {Array.isArray(filteredSearchList) && filteredSearchList.length > 0 ? (
          filteredSearchList.map((restaurant, index) => (
            <Link
              to={`/restaurants/${restaurant.info.id}`}
              key={restaurant.info.id + index}
            >
              {restaurant.info.promoted ? (
                <PromoteRestaurantCard restaurant={restaurant} />
              ) : (
                <RestaurantCard restaurant={restaurant} />
              )}
            </Link>
          ))
        ) : (
          <div className="flex justify-center w-full">
            <p className="text-center text-gray-700 text-lg">
              No Restaurants Found, Please refresh
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
