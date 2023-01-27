import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantsMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.92367504017809&lng=77.50495344400406&menuId=" +
        id
    );
    const menuData = await data.json();
    setRestaurant(menuData.data);
  }

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
