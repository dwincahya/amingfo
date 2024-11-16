"use client";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import React from "react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
    
  const router = useRouter();

  const handleBack = () => {
    event.preventDefault;
    router.back();
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <button onClick={handleBack} className="text-color-primary">
        <ArrowCircleLeft size={32} />
      </button>
      <h3 className="text-2xl font-white text-color-primary font-bold">
        {title}
      </h3>
    </div>
  );
};

export default Header;
