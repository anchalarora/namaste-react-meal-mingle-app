import { useEffect, useState, useContext } from "react";
import { MENU_API } from "./utils/constants";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";

import useRestaurantMenu from "./utils/useRestaurantMenu";

import RestaurantCategory from "./RestaurantCategory";

import UserContext from "./utils/UserContext";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);

  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    fetchMenuItems();
  }, [resId]);

  const fetchMenuItems = async () => {
    const data = await fetch(MENU_API + resId + "&submitAction=ENTER");

    const json = await data.json();
    console.log("MENU API response ", json);
    setRestInfo(json.data);
  };

  const {
    name = "Unknown Restaurant",
    cuisines = [],
    costForTwoMessage = "Not available",
    avgRating = "N/A",
    cloudinaryImageId = "",
  } = restInfo?.cards?.[2]?.card?.card?.info || {};

  const { itemCards = [] } =
    restInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  const categories =
    restInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(itemCards, "categories", categories);
  return restInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-4 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>
      <p>Rating : {avgRating}</p>
      <h1>Menu</h1>
      {console.log("categories inside", categories)}
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            category={category?.card?.card}
            key={category.card?.card?.title}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}- {" Rs."}{" "}
            {item.card.info.defaultPrice / 100 ||
              item.card.info.finalPrice / 100 ||
              item.card.info.price / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
