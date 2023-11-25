"use client";
import axios from "axios";
import React, { useState } from "react";

const UploadForm = ({ onUpload }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [link, setLink] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setSelectedImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to ImgBB API
      // Use FormData to send files
      let arr = [];
      const formData = new FormData();
      for (let i = 0; i < selectedImages.length; i++) {
        formData.append("image", selectedImages[i]);
        const response = await axios.post(
          "https://api.imgbb.com/1/upload?expiration=600&key=cf0d99684ecdf3c7dd5fdfda9db29f4f",
          formData
        );
        arr.push(response);
      }
      setLink(arr);
      console.log(arr);
      //   if (response.ok) {
      //     const data = await response.json();
      //     console.log("succefully");
      //   } else {
      //     console.error("Failed to upload images");
      //   }
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };
  console.log(link);
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" multiple onChange={handleFileChange} />
      <button className="text-yellow-500" type="submit">
        Upload
      </button>
      {link &&
        link.length > 0 &&
        link.map((item, i) => {
          return (
            <div key={i}>
              <p className="text-green-700">url:{item?.data?.data?.url}</p>
              <img alt="" src={item?.data?.data?.url} />
            </div>
          );
        })}
    </form>
  );
};

export default UploadForm;
