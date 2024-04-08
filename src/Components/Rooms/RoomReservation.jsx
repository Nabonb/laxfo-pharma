import React from "react";
import Calender from "../Rooms/Calender";
import Button from "../Button/Button";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { formatDistance } from "date-fns";
import { useState } from "react";
import BookingModal from "../Modal/BookingModal";
import { addBooking, updateStatus } from "../../api/bookings";
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom'

const RoomReservation = ({ roomData }) => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonDisabled,setIsButtonDisabled]=  useState(false)
  const navigate = useNavigate()
  
  //finding total price using date fns tool
  const totalPrice =
    parseFloat(
      formatDistance(new Date(roomData.to), new Date(roomData.from)).split(
        " "
      )[0]
    ) * roomData.price;
  // console.log(totalPrice)

  //booking calender date range
  const [value, setValue] = useState({
    startDate: new Date(roomData.from),
    endDate: new Date(roomData.to),
    key: "selection",
  });

  //for booking details
  const [bookingInfo, setBookingInfo] = useState({
    guest: { name: user.displayName, email: user.email, image: user.photoURL },
    host: roomData.host.email,
    location: roomData.location,
    price: totalPrice,
    from: value.startDate,
    to: value.endDate,
    title: roomData.title,
    roomId: roomData._id,
    image:roomData.image,
  });

  const handleDates = (ranges) => {
    setValue({ ...value }); //only for avoiding errors
  };

  //for closing the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  //modalHandler
  const modalHandler = () => {
    addBooking(bookingInfo)
      .then((data) => {
        updateStatus(roomData._id, true).then((data) => {
          toast.success("Booking done successfully");
          console.log(data);
          setIsButtonDisabled(true)
          closeModal();
          navigate('/dashboard/my-bookings')
        });
      })
      .catch((err) => {
        closeModal();
        console.log(err.message);
      });
    console.log(bookingInfo);
  };

  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">${roomData.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender value={value} handleDates={handleDates}></Calender>
      </div>
      <hr />
      <div className="p-4">
        <Button
          onClick={() => setIsOpen(true)}
          disabled={roomData.host.email === user?.email || roomData.booked || isButtonDisabled}
          label="Reserve"
        ></Button>
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
      <BookingModal
        modalHandler={modalHandler}
        closeModal={closeModal}
        bookingInfo={bookingInfo}
        isOpen={isOpen}
      ></BookingModal>
    </div>
  );
};

export default RoomReservation;
