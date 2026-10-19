import React from "react";
import { type UserProfileCardProps } from "../types/index.ts";

export const UserProfileCard: React.FC<UserProfileCardProps> = (props) => {
  const userCardStyle = {
    display: "block",
    width: "400px",
    margin: "0px",
    border: "1px solid white",
    marginLeft: "10px",
    marginTop: "10px",
    padding: "25px",
  };

  const textStyle = {
    fontSize: "text-sm",
    color: "#4a4a4e",
  };

  const btnStyle = {
    backgroundColor: "blue",
    color: "white",
    marginTop: "5px",
  };

  return (
    <div style={userCardStyle} className="rounded-xl shadow-xl">
      <div className="grid grid-cols-2">
        <div>
          <img src={props.user.avatarUrl} className="w-25" />
        </div>
        <div className="grid grid-rows-3 text-center -ml-[55%]">
          <div className="font-bold">{props.user.name}</div>
          <div style={textStyle}>{props.user.email}</div>
          <div style={textStyle}> {props.user.role} </div>
        </div>
      </div>
      <div style={btnStyle}>
        <button type="submit" className="w-full h-10 bg-blue">
          Edit Profile
        </button>
      </div>
    </div>
  );
};
