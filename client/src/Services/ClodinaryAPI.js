import Axios from "axios";

const ClodinaryAPI = async (uploadImage) => {
  const formData = new FormData();
  formData.append("file", uploadImage);
  formData.append("upload_preset", "event_uploads"); // set this in Cloudinary settings

  try {
    const res = await Axios.post(
      "https://api.cloudinary.com/v1_1/dhzlr6c5u/image/upload",
      formData
    );

    if(res.data.secure_url !==""){
        return res.data.secure_url; // save this to backend DB
    }
    console.log("Cloudinary URL:", res.data.secure_url);
  } catch (error) {
    console.error("Image upload failed:", error);
  }
};

export default ClodinaryAPI;