// This Component is not in use.

const ChickenRestaurantCard = (props) => {
  const { restaurant } = props;
  const { strMeal, strArea, strTags, strCategory } = restaurant;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/69e69c55-d2bb-4207-8310-131fc693f78a_26724.JPG"
      />
      <h2>{strMeal}</h2>
      <h3>{strArea}</h3>
      <h3>{strTags}</h3>
      <h3>{`Category : ${strCategory}`}</h3>
    </div>
  );
};

export default ChickenRestaurantCard;
