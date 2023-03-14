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
          <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
          <h5>{restaurant.area}</h5>
          <h5>{restaurant.city}</h5>
          <h5>{restaurant.avgRating} stars</h5>
          <h5>{restaurant.costForTwoMsg}</h5>
        </div>
        <div>
          <h3>Menu</h3>
          <ul>
            {Object.values(restaurant?.menu?.items).map((items) => (
              <li key={items.id}>{items.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantsMenu;
