import React from "react";
import avatarImg from "../../../assets/images/placeholder.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
const Avatar = () => {
  const { user } = useContext(AuthContext);
  // console.log(user)
  return (
      <img
        className="rounded-full"
        height="30"
        width="30"
        src={user && user.photoURL ? user.photoURL : avatarImg}
        alt="profile"
      />
  );
};

export default Avatar;
