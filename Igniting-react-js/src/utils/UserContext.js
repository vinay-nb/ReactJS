import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "vinay",
    email: "vinay@gmail.com",
  },
});

export default UserContext;
