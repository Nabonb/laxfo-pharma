import React from "react";
import Container from "../../Components/Shared/Container/Container";
import Header from "../../Components/Rooms/Header";
import RoomInfo from "../../Components/Rooms/RoomInfo";
import RoomReservation from "../../Components/Rooms/RoomReservation";
import {useLoaderData} from 'react-router-dom'

const RoomDetails = () => {
  const roomData = useLoaderData()
  // console.log(roomData)
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <Header roomData={roomData}></Header>
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <RoomInfo roomData={roomData}></RoomInfo>
            <div className="order-first md:order-last md:col-span-3 mb-10">
              <RoomReservation roomData={roomData}></RoomReservation>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
