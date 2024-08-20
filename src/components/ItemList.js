import { CDN_URL } from "./utils/constants";

const ItemList = ({ items }) => {
  console.log("items", items[0].card.info.id);

  //console.log("items", items[0].card.info.id);
  return (
    <div>
      {items.map((item) => (
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
              <button className="p-2 bg-black text-white shadow-lg rounded-lg mx-10">
                {" "}
                ADD +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-80" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
