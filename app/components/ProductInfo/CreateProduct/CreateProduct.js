"use client";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { PhotoIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
  Select,
  Textarea,
  Checkbox,
  Option,
  Radio,
} from "@material-tailwind/react";
import { FaLongArrowAltRight } from "react-icons/fa";

export function CreateProduct({ handleOpen, open }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
  const options = ["XS", "S", "M", "L", "XL"];
  const status = ["in-stock", "out-of-stock"];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      // If the option is already selected, remove it
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      // If the option is not selected, add it
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const onSubmit = async (data) => {
    try {
      // It's single data
      // const images = data.images[0];
      // const formData = new FormData();
      // formData.append("image", images);

      const images = data.images;
      const formData = new FormData();
      for (const image of images) {
        formData.append("img", image);
      }

      // const formData = new FormData();
      // for (const image of images) {
      //   formData.append("images", image);
      // }
      // formData.append("image", images);

      const response = await axios.post(
        "https://api.imgbb.com/1/upload?expiration=600&key=cf0d99684ecdf3c7dd5fdfda9db29f4f",
        formData
      );

      // // Assuming ImgBB API response structure is { data: { url } }
      // const imageUrls = response.data.data.images.map((image) => image.url);
      // console.log("Images uploaded successfully!", imageUrls);

      console.log(images);
      console.log(store);
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  return (
    <>
      <Dialog
        className="bg-gray-900 scrollable-element"
        open={open}
        handler={handleOpen}
      >
        <DialogHeader className="text-gray-300">Create a product</DialogHeader>
        <DialogBody className="h-[42rem] overflow-y-auto scrollable-element">
          <form onSubmit={handleSubmit(onSubmit)} className="text-gray-300">
            {/*--------------- Name ------------ */}
            <div>
              <Input
                {...register("name", {
                  required: "Name is required",
                })}
                success
                color="white"
                label="Product name*"
                className="text-white"
              />
            </div>
            {/*-- Orginal Price & Discount Price -- */}
            <div className="my-4 flex items-center gap-4">
              <div>
                <Typography
                  variant="small"
                  color="blue"
                  className="mb-2 font-medium text-green-500"
                >
                  Orginal Price*
                </Typography>
                <Input
                  {...register("orginalPrice")}
                  success
                  maxLength={5}
                  type="number"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-500 text-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 font-medium text-green-500"
                >
                  Discount Price (optional)
                </Typography>
                <Input
                  {...register("discountPrice")}
                  success
                  type="number"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-500 text-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
            {/*------------ Description ----------- */}
            <div>
              <Textarea
                {...register("description")}
                className="text-white"
                label="Description*"
                success
              />
            </div>
            {/*--------------- Size ------------ */}
            <div>
              <Typography
                variant="small"
                color="blue"
                className="mb-1 pt-2 font-medium text-green-500"
              >
                Size*
              </Typography>
              <div className="flex w-max gap-4">
                {options.map((option) => (
                  <label className="flex items-center gap-2" key={option}>
                    <input
                      {...register("size")}
                      type="checkbox"
                      value={option}
                      checked={selectedOptions.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            {/*-------------- Category ----------- */}
            <div>
              <Typography
                variant="small"
                color="blue"
                className="py-2 font-medium text-green-500"
              >
                Category*
              </Typography>
              <select
                {...register("yourSelectFieldName")}
                className="bg-black max-w-xs w-full py-2 px-2"
              >
                <option disabled className="">
                  Women{" > "}Tops
                </option>
                <option>Tops</option>
                <option>Shirts</option>
                <option>T-shirt</option>
                <option>Cardigans</option>
                <option>Crop Top</option>
                <option>Vest</option>
                <option>Tank Tops</option>
                <option>Tank Tops</option>
                <option>Sweaters & Knits</option>
                <option>Half shirt</option>
                <option disabled className="">
                  Women{" > "}Bottoms
                </option>
                <option>Skirt</option>
                <option>Short skirt</option>
                <option>Formal</option>
                <option>Boyfriend</option>
                <option>Shorts</option>
                <option>Wide leg</option>
                <option>Mom</option>
                <option>Skinny</option>
                <option>Jeggings</option>
                <option>Ripped</option>
                <option>Baggy</option>
                <option disabled className="">
                  Women{" > "}Dress
                </option>
                <option>Long Frock</option>
                <option>Short Frock</option>
                <option>Short frock</option>
                <option>Gown</option>
                <option>Beach dress</option>
                <option>Midi dress</option>
                <option disabled className="">
                  Man
                </option>
                <option>Man</option>
                <option disabled className="">
                  Kids
                </option>
                <option>Dress</option>
                <option>Accessories</option>
                <option>Toys</option>
                <option disabled className="">
                  Home & Decor
                </option>
                <option>Wall Decor</option>
                <option>Plants Tob</option>
                <option disabled className="">
                  Accessories
                </option>
                <option>Watch</option>
                <option>Jewellery</option>
                <option>Hat</option>
                <option disabled className="">
                  Shoes
                </option>
                <option>Shoes</option>
                <option disabled className="">
                  Bags
                </option>
                <option>Bags</option>
              </select>
            </div>

            <div className="w-72 pt-12 pb-2">
              {/* <Select
                {...register("category")}
                label="Category"
                className="text-white"
                name="selectOption"
                success
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
              > */}
              {/* Women -> Tops */}
              {/* <label className="my-2 font-semibold flex items-center gap-2">
                  <span>Women</span>
                  <span>
                    <FaLongArrowAltRight />
                  </span>
                  <span>Tops</span>
                </label>
                <Option>Tops</Option>
                <Option>Shirts</Option>
                <Option>T-shirt</Option>
                <Option>Cardigans</Option>
                <Option>Crop Top</Option>
                <Option>Vest</Option>
                <Option>Tank Tops</Option>
                <Option>Tank Tops</Option>
                <Option>Sweaters & Knits</Option>
                <Option>Half shirt</Option> */}
              {/* Women -> Tops */}
              {/* <label className="my-2 font-semibold flex items-center gap-2">
                  <span>Women</span>
                  <span>
                    <FaLongArrowAltRight />
                  </span>
                  <span>Bottoms</span>
                </label>
                <Option>Skirt</Option>
                <Option>Short skirt</Option>
                <Option>Formal</Option>
                <Option>Boyfriend</Option>
                <Option>Shorts</Option>
                <Option>Wide leg</Option>
                <Option>Mom</Option>
                <Option>Skinny</Option>
                <Option>Jeggings</Option>
                <Option>Ripped</Option>
                <Option>Baggy</Option> */}
              {/* Women -> Tops */}
              {/* <label className="my-2 font-semibold flex items-center gap-2">
                  <span>Women</span>
                  <span>
                    <FaLongArrowAltRight />
                  </span>
                  <span>Dress</span>
                </label>
                <Option>Long Frock</Option>
                <Option>Short Frock</Option>
                <Option>Short frock</Option>
                <Option>Gown</Option>
                <Option>Beach dress</Option>
                <Option>Midi dress</Option> */}
              {/* man */}
              {/* <label className="my-2 font-semibold">
                  <span>Man</span>
                </label>
                <Option>Man</Option> */}
              {/* kids */}
              {/* <label className="my-2 font-semibold">
                  <span>kids</span>
                </label>
                <Option>Dress</Option>
                <Option>Accessories</Option>
                <Option>Toys</Option> */}
              {/* Home & Decor */}
              {/* <label className="my-2 font-semibold">
                  <span>Home & Decor</span>
                </label>
                <Option>Wall Decor</Option>
                <Option>Plants Tob</Option> */}
              {/* Accessories */}
              {/* <label className="my-2 font-semibold">
                  <span>Accessories</span>
                </label>
                <Option>Watch</Option>
                <Option>Jewellery</Option>
                <Option>Hat</Option> */}
              {/* Shoes */}
              {/* <label className="my-2 font-semibold">
                  <span>Shoes</span>
                </label>
                <Option>Shoes</Option> */}
              {/* Bags */}
              {/* <label className="py-2 font-semibold">
                  <span>Bags</span>
                </label>
                <Option>Bags</Option> */}
              {/* </Select> */}
            </div>
            {/*-------------- Status ----------- */}
            <div className="pt-4">
              <Typography
                variant="small"
                color="blue"
                className=" font-medium text-green-500"
              >
                Status*
              </Typography>
              <div className="flex gap-10">
                {status.map((option) => (
                  <label key={option} className="flex gap-2">
                    <input
                      type="radio"
                      {...register("status")}
                      value={option}
                    />
                    {/* <Radio name="type" color="blue" label={option} /> */}
                    {option}
                  </label>
                ))}
                {/* <Radio
                  name="type"
                  {...register("status")}
                  color="blue"
                  label={
                    <Typography
                      as="a"
                      href="#"
                      color="white"
                      className="hover:text-blueg-gray-900 font-medium transition-colors"
                    >
                      In-stock
                    </Typography>
                  }
                />
                <Radio
                  name="type"
                  color="blue"
                  {...register("status")}
                  label={
                    <Typography
                      as="a"
                      href="#"
                      color="white"
                      className="hover:text-blueg-gray-900 font-medium transition-colors"
                    >
                      Out-of-stock
                    </Typography>
                  }
                  className="text-white"
                  defaultChecked
                /> */}
              </div>
            </div>
            {/*-------------- Photo -------------- */}
            <div className="col-span-full pt-4">
              <Typography
                variant="small"
                color="blue"
                className=" font-medium text-green-500"
              >
                Product Photo*
              </Typography>
              <div className="mt-0 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <input
                        multiple
                        {...register("images")}
                        type="file"
                        className="bg-gray-800 text-white rounded"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            {/* Butoon */}
            <DialogFooter className="space-x-2">
              <Button
                onClick={handleOpen}
                variant="outlined"
                size="sm"
                className="text-white border-white"
              >
                cancel
              </Button>
              <Button
                variant="gradient"
                color="blue"
                onClick={handleOpen}
                type="submit"
              >
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}
