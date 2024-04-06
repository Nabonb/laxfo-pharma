import React, { useContext, useState } from "react";
import AddRoomForm from "../../Components/Form/AddRoomForm";
import { imageUpload } from "../../api/utils";
import { AuthContext } from "../../providers/AuthProvider";
import { addRoom } from "../../api/rooms";
import toast from "react-hot-toast";

const AddRoom = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  //handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const location = event.target.location.value;
    const title = event.target.title.value;
    const from = dates.startDate;
    const to = dates.endDate;
    const price = event.target.price.value;
    const guests = event.target.total_guest.value;
    const bedrooms = event.target.bedrooms.value;
    const bathrooms = event.target.bathrooms.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    const image = event.target.image.files[0];

    imageUpload(image)
      .then((data) => {
        const roomData = {
          location,
          title,
          from,
          to,
          price: parseFloat(price),
          guests,
          bedrooms,
          bathrooms,
          description,
          image: data.data.display_url,
          host: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
          category,
        };

        //post room data to the server
        addRoom(roomData)
          .then((data) => {
            toast.success("Room Added!");
            console.log(data);
          })
          .catch((err) => {
            console.log(err.message);
          });

        console.log(roomData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  //handle image change
  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };

  //handle date changes
  const handleDates = (ranges) => {
    setDates(ranges.selection);
    //  console.log(ranges.selection)
  };

  return (
    <AddRoomForm
      handleSubmit={handleSubmit}
      uploadButtonText={uploadButtonText}
      handleImageChange={handleImageChange}
      loading={loading}
      dates={dates}
      handleDates={handleDates}
    ></AddRoomForm>
  );
};

export default AddRoom;
