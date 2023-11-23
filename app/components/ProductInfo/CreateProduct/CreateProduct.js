"use client";
import React from "react";
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
  return (
    <>
      <Dialog
        className="bg-gray-900 scrollable-element"
        open={open}
        handler={handleOpen}
      >
        <DialogHeader className="text-gray-300">Create a product</DialogHeader>
        <DialogBody className="h-[42rem] overflow-y-auto scrollable-element">
          <form className="text-gray-300">
            <Input
              success
              color="white"
              label="Product name*"
              className="text-white"
            />
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
                  success
                  type="number"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-500 text-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
            <Textarea className="text-white" label="Description*" success />
            <div>
              <Typography
                variant="small"
                color="blue"
                className="mb-1 pt-2 font-medium text-green-500"
              >
                Size*
              </Typography>
              <div className="flex w-max gap-4">
                <span className="flex items-center">
                  <Checkbox color="indigo" defaultChecked />
                  <h1 className="">XS</h1>
                </span>
                <span className="flex items-center">
                  <Checkbox color="indigo" defaultChecked />
                  <h1 className="">S</h1>
                </span>
                <span className="flex items-center">
                  <Checkbox color="indigo" defaultChecked />
                  <h1 className="">M</h1>
                </span>
                <span className="flex items-center">
                  <Checkbox color="indigo" defaultChecked />
                  <h1 className="">L</h1>
                </span>
                <span className="flex items-center">
                  <Checkbox color="indigo" defaultChecked />
                  <h1 className="">XL</h1>
                </span>
              </div>
            </div>

            <div className="w-72 pt-12 pb-2">
              <Select
                label="Category"
                className="text-white"
                success
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
              >
                {/* Women -> Tops */}
                <label className="my-2 font-semibold flex items-center gap-2">
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
                <Option>Half shirt</Option>
                {/* Women -> Tops */}
                <label className="my-2 font-semibold flex items-center gap-2">
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
                <Option>Baggy</Option>
                {/* Women -> Tops */}
                <label className="my-2 font-semibold flex items-center gap-2">
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
                <Option>Midi dress</Option>
                {/* man */}
                <label className="my-2 font-semibold">
                  <span>Man</span>
                </label>
                <Option>Man</Option>
                {/* kids */}
                <label className="my-2 font-semibold">
                  <span>Man</span>
                </label>
                <Option>Dress</Option>
                <Option>Accessories</Option>
                <Option>Toys</Option>
                {/* Home & Decor */}
                <label className="my-2 font-semibold">
                  <span>Home & Decor</span>
                </label>
                <Option>Wall Decor</Option>
                <Option>Plants Tob</Option>
                {/* Accessories */}
                <label className="my-2 font-semibold">
                  <span>Accessories</span>
                </label>
                <Option>Watch</Option>
                <Option>Jewellery</Option>
                <Option>Hat</Option>
                {/* Shoes */}
                <label className="my-2 font-semibold">
                  <span>Shoes</span>
                </label>
                <Option>Shoes</Option>
                {/* Bags */}
                <label className="py-2 font-semibold">
                  <span>Bags</span>
                </label>
                <Option>Bags</Option>
              </Select>
            </div>
            <div className="pt-4">
              <Typography
                variant="small"
                color="blue"
                className=" font-medium text-green-500"
              >
                Status*
              </Typography>
              <div className="flex gap-10">
                <Radio
                  name="type"
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
                />
              </div>
            </div>
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
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
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
          </form>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button
            onClick={handleOpen}
            variant="outlined"
            size="sm"
            className="text-white border-white"
          >
            cancel
          </Button>
          <Button variant="gradient" color="blue" onClick={handleOpen}>
            Save
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
