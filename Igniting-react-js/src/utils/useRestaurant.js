import { useState, useEffect } from "react";
import { API_MENU } from "../constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(API_MENU + id);
    const menuData = await data.json();
    setRestaurant(menuData.data);
  }

  return restaurant;
};

export default useRestaurant;
