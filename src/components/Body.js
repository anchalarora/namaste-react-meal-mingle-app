import RestaurantCard from "./RestaurantCard";

import ChickenRestaurantCard from "./ChickenRestaurantCard";

import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";

import { CHICKEN_SHOP_LIST_URL, SWIGGY_LIST_API } from "./utils/constants";

import { Link } from "react-router-dom";

const Body = () => {
  // state var - super powerful var - use a hook => useState
  const [restaurants, setRestaurants] = useState([]);
  const [filteredSearchList, setFilteredSearchList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_LIST_API);
      const json = await data.json();
      console.log(" fetched data ", json);
      console.log(
        "json",
        json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants
      );
      setRestaurants(
        json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants
      );
      setFilteredSearchList(
        json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants
      );
      //setRestaurants(json.meals)
      //setFilteredSearchList(json.meals)
    } catch (error) {
      console.error("Failed to fetch", error);
    }
  };

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-container">
        <input
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-button"
          onClick={() => {
            const filteredSearchedData = restaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredSearchList(filteredSearchedData);
          }}
        >
          Search
        </button>
        <button
          className="filter-button"
          onClick={() => {
            const filteredListOfRestaurants = restaurants.filter(
              (res) => res.info?.avgRating >= 4
            );
            console.log("filteredListOfRestaurants", filteredListOfRestaurants);
            setFilteredSearchList(filteredListOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredSearchList.map((restaurant, index) => (
          // <ChickenRestaurantCard key={restaurant.idMeal} restaurant={restaurant} />
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id + index}
          >
            <RestaurantCard restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
