import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantsMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

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
              "menu details",
              restaurant.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                ?.card?.card?.itemCards[1]?.card?.info?.name
            )}
            {console.log(
              "details",
              restaurant.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                ?.card?.card
            )}
            {Object.values(
              restaurant.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                ?.card?.card?.itemCards[1].card?.info.name
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantsMenu;
