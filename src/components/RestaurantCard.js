import { useContext } from "react";
import { CDN_URL } from "./utils/constants";
import UserContext from "./utils/UserContext";

const RestaurantCard = (props) => {
  const { restaurant } = props;
  const { info } = restaurant;
  const { name, cuisines, sla, avgRating, cloudinaryImageId } = info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="p-4 m-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-400">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h3 className="font-serif">{cuisines.join(", ")}</h3>
      <h3>{sla.slaString}</h3>
      <h3>{avgRating}</h3>
      <h3>{loggedInUser}</h3>
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
