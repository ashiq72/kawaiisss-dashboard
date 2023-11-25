import axios from "axios";

export const uploadCloudinary = async (file) => {
  const formData = new FormData();
  formData.append(`file`, file);
  formData.append("upload_preset", "o9mmsygk");
  const { data } = await axios.post(
    `https://api.cloudinary.com/v1_1/denut5lin/image/upload`,
    formData
  );
  return { publicId: data?.public_id, url: data?.secure_url };
};
