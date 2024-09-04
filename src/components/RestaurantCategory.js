import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ category, showItems, setShowIndex }) => {
  const { title, itemCards } = category || {};

  // const [showItems, setshowItems] = useState(false);

  console.log("category", title);

  const handleClick = () => {
    //setshowItems(!showItems);
    setShowIndex();
  };

  //console.log("data", data, itemCards.length);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
