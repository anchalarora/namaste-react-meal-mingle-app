import { useContext } from "react";
import { CDN_URL } from "./utils/constants";
import UserContext from "./utils/UserContext";

const RestaurantCard = (props) => {
  const { restaurant } = props;
  const { info } = restaurant;
  console.log("info", info);
  const { name, cuisines, sla, avgRating, cloudinaryImageId, costForTwo } =
    info;

  return (
    <div className="p-4 m-4 w-[250px] bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
      <img
        className="rounded-lg w-full h-[150px] object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h2 className="font-bold py-4 text-xl text-gray-800 max-w-[200px] truncate">
        {name}
      </h2>
      <h3 className="font-serif text-gray-600 max-w-[200px] truncate">
        {cuisines.join(", ")}
      </h3>

      <div className="flex items-center space-x-2 mt-2">
        <span
          className={`px-2 py-1 text-xs font-semibold ${
            avgRating >= 4.5
              ? "bg-green-500 text-white"
              : avgRating >= 4
              ? "bg-yellow-500 text-white"
              : "bg-red-500 text-white"
          } rounded-lg`}
        >
          ⭐ {avgRating}
        </span>
        <span className="text-sm text-gray-500 font-bold">
          {sla.lastMileTravelString}
        </span>
        <span className="text-sm text-gray-600 font-bold">{costForTwo}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;

export const withPromotedRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="">
        <h2 className="absolute mx-3 p-2 rounded-lg bg-black text-white">
          Promoted
        </h2>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
