"use client";
import { Button } from "@material-tailwind/react";
import React from "react";
import AnalysisCard from "../components/Sheard/AnalysisCard/AnalysisCard";
import { AllProducts } from "../components/ProductInfo/AllProducts/AllProducts";
import { CreateProduct } from "../components/ProductInfo/CreateProduct/CreateProduct";

const addproduct = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="text-white px-4 pt-4 ">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-200">Product</h1>
          <p className="text-sm text-green-500 font-semibold">
            See information about all products
          </p>
        </div>
        <div className="flex md:justify-end justify-start">
          <div>
            <Button
              onClick={handleOpen}
              color="blue"
              size="sm"
              className="flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
              ADD PRODUCT
            </Button>
          </div>
        </div>
      </div>
      {/* Seceond section  */}
      <AnalysisCard />
      <AllProducts />
      <CreateProduct handleOpen={handleOpen} open={open} />
    </div>
  );
};

export default addproduct;
