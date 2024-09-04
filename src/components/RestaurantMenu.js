import { useEffect, useState } from "react";
import { MENU_API } from "./utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    fetchMenuItems();
  }, [resId]);

  const fetchMenuItems = async () => {
    const data = await fetch(`${MENU_API}${resId}&submitAction=ENTER`);
    const json = await data.json();
    console.log("MENU API response", json);
    setRestInfo(json.data);
  };

  // Default values
  let name = "Unknown Restaurant";
  let cuisines = [];
  let costForTwoMessage = "Not available";
  let avgRating = "N/A";
  let cloudinaryImageId = "";
  let itemCards = [];
  let categories = [];

  // Loop through the cards array to find the necessary data
  restInfo?.cards?.forEach((card) => {
    const cardInfo = card?.card?.card?.info;

    // Check for restaurant info in any card that contains info object
    if (cardInfo) {
      name = cardInfo.name || name;
      cuisines = cardInfo.cuisines || cuisines;
      costForTwoMessage = cardInfo.costForTwoMessage || costForTwoMessage;
      avgRating = cardInfo.avgRating || avgRating;
      cloudinaryImageId = cardInfo.cloudinaryImageId || cloudinaryImageId;
    }

    // Check for item cards and categories
    if (card.groupedCard?.cardGroupMap?.REGULAR?.cards) {
      card.groupedCard.cardGroupMap.REGULAR.cards.forEach((regularCard) => {
        // If the card has itemCards, assign them
        if (regularCard.card?.card?.itemCards) {
          itemCards = regularCard.card.card.itemCards;
        }

        // Collect all categories
        if (
          regularCard.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          categories.push(regularCard.card.card);
        }
      });
    }
  });

  return restInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-4 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <p>Rating: {avgRating}</p>
      <h1>Menu</h1>
      {categories.map((category, index) => (
        <RestaurantCategory
          category={category}
          key={category?.title}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
