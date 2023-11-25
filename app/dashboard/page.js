"use client";
import React, { useState } from "react";

const UploadForm = ({ onUpload }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setSelectedImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to ImgBB API
      // Use FormData to send files
      const formData = new FormData();
      for (let i = 0; i < selectedImages.length; i++) {
        formData.append("image", selectedImages[i]);
        const response = await fetch(
          "https://api.imgbb.com/1/upload?key=cf0d99684ecdf3c7dd5fdfda9db29f4f",
          {
            method: "POST",
            body: formData,
          }
        );
      }

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

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" multiple onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;
