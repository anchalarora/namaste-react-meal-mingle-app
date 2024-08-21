import { useDispatch } from "react-redux";
import { CDN_URL } from "./utils/constants";
import { addItem } from "./utils/cartSlice";

const ItemList = ({ items }) => {
  //console.log("items", items[0].card.info.id);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    console.log("clicked");
    dispatch(addItem(item));
  };

  console.log("items ", items.length);

  //console.log("items", items[0].card.info.id);
  return (
    <div>
      {items && items.length > 0 ? (
        items.map((item) => {
          // Ensure item and its nested properties are defined before rendering
          if (!item?.card?.info) {
            console.log("empty");
            return null;
          }

          return (
            <div
              className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
              key={item.card.info.id}
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span>{item.card.info.name}</span>
                  <span> - {"₹ " + item.card.info.price / 100}</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
              </div>
              <div className="w-3/12 p-4">
                <div className="absolute">
                  <button
                    className="p-2 bg-black text-white shadow-lg rounded-lg mx-10"
                    onClick={() => handleAddItem(item)}
                  >
                    ADD +
                  </button>
                </div>
                <img src={CDN_URL + item.card.info.imageId} className="w-80" />
              </div>
            </div>
          );
        })
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default ItemList;
