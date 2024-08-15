import { CDN_URL } from "./utils/constants";

const RestaurantCard = (props) => {
  const { restaurant } = props;
  const { info } = restaurant;
  const { name, cuisines, sla, avgRating, cloudinaryImageId } = info;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{sla.slaString}</h3>
      <h3>{avgRating}</h3>
    </div>
  );
};

export default RestaurantCard;
