"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import AnalysisCard from "./components/Sheard/AnalysisCard/AnalysisCard";

export default function Home() {
  return (
    <div className="text-white px-4 pt-4 ">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-200"> Dashboard</h1>
          <p className="text-sm text-green-500 font-semibold">
            Welcome to your dashboard
          </p>
        </div>
        <div className="flex md:justify-end justify-start">
          <Button color="blue">Download Report</Button>
        </div>
      </div>
      {/* Seceond section  */}
      <AnalysisCard />
    </div>
  );
}
