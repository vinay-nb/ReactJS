import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import { addItem, removeItem } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantsMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };

  if (!restaurant) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="menu-desc">
        <div>
          <h1> Restaurant id: {id}</h1>
          <img
            src={
              IMG_CDN_URL +
              restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
            }
          />
          <h5>Area: {restaurant?.cards[0]?.card?.card?.info?.areaName} </h5>
          <h5>City: {restaurant?.cards[0]?.card?.card?.info?.city}</h5>
          <h5>Ratings: {restaurant?.cards[0]?.card?.card?.info?.avgRating}</h5>
          <h5>
            Cost for 2:{" "}
            {restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}
          </h5>
        </div>
        <div>
          <h3>Menu</h3>
          <ul>
            {console.log(
              "details",
              restaurant.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                ?.card?.card.categories[0].itemCards[0].card.info.name
            )}
            {Object.values(
              restaurant.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                ?.card?.card.categories[0].itemCards[0].card.info.name
            )}
            <button
              className="p-2 m-2 bg-green-400"
              onClick={() => addFoodItem("grapes")}
            >
              Add to Cart
            </button>
            <button
              className="p-2 m-2 bg-green-400"
              onClick={() => removeFoodItem("grapes")}
            >
              Remove from Cart
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantsMenu;
