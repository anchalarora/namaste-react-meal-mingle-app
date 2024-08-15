import { useEffect, useState } from "react";
import { MENU_API } from "./utils/constants";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    const data = await fetch(MENU_API + resId + "&submitAction=ENTER");

    const json = await data.json();
    console.log(json);
    console.log("name", json?.data?.cards[2]?.card?.card?.info.name);
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

  console.log(itemCards);
  return restInfo === null ? (
    <Shimmer />
  ) : (
    <div className="res-menu-container">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>
      <p>Rating : {avgRating}</p>
      <h1>"Menu"</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}- {" Rs."}{" "}
            {item.card.info.defaultPrice / 100 ||
              item.card.info.finalPrice / 100 ||
              item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
