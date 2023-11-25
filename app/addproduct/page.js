"use client";
import React, { useState } from "react";

const UploadForm = ({ onUpload }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  console.log("selectedImages:", selectedImages);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setSelectedImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert FileList to an array
    const filesArray = Array.from(selectedImages);

    // Use FormData to send files
    const list = [];
    const formData = new FormData();
    for (let i = 0; i < selectedImages.length; i++) {
      formData.append("image", selectedImages[i]);
    }

    console.log("formData:", formData); // Log formData
    console.log("list", list); // Log formData

    try {
      // Make a POST request to ImgBB API
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=cf0d99684ecdf3c7dd5fdfda9db29f4f",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
      } else {
        const errorData = await response.json();
        console.error("Failed to upload images:", errorData);
      }
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" multiple onChange={handleFileChange} />
      <button className="text-yellow-600" type="submit">
        Upload
      </button>
    </form>
  );
};

export default UploadForm;
