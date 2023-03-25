import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/UserContext";

const Card = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const {user} = useContext(UserContext);
  return (
    <div className="bg-slate-100 w-56 p-2 m-2 shadow-md rounded-md">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-semibold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
      <span className="text-red-300">{user.name}</span>
    </div>
  );
};

export default Card;
