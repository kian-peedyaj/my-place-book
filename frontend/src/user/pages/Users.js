import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMe6DU-wN0DhwatyrC6bKJxfcGFsnII42DUA&usqp=CAU",
      name: "JD",
      places: 3,
    },
    {
      id: "u2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKCPp1ipbqLmduklzXlepXMky-mfQX2juwkA&usqp=CAU",
      name: "Bhavana",
      places: 2,
    },
    {
      id: "u3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_9BeyvG7laVMP2Q87w4Xj8zk1cvggMKRAKA&usqp=CAU",
      name: "Vishal",
      places: 1,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
