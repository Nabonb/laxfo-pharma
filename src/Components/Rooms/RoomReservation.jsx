import React from "react";
import Calender from "../Rooms/Calender";
import Button from "../Button/Button";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { formatDistance } from "date-fns";
import { useState } from "react";

const RoomReservation = ({ roomData }) => {
  const {user} = useContext(AuthContext)

  //finding total price using date fns tool
  const totalPrice = parseFloat(formatDistance(new Date(roomData.to),new Date(roomData.from)).split(' ')[0])*roomData.price;
  // console.log(totalPrice)

  const [bookingInfo,setBookingInfo] = useState({
    guest:{name:user.displayName, email:user.email,image:user.photoURL},
    host:roomData.host.email,
    location:roomData.location,
    price:totalPrice
  })
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">${roomData.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center"> 
        <Calender></Calender>
      </div>
      <hr />
      <div className="p-4">
        <Button disabled={roomData.host.email=== user?.email} label="Reserve"></Button>
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
    </div>
  );
};

export default RoomReservation;
