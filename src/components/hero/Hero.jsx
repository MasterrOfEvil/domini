"use client";
import React from "react";

const Hero = () => {
  return (
    <div
      className="bg-cover w-full h-[85vh]"
      style={{ backgroundImage: 'url("/beats.png")' }}
    >
      <div className="bg-[rgb(0,0,0,0.35)] w-full h-full flex justify-center ">
        <div className=" w-[48vw] text-center flex flex-col justify-center items-center h-[70vh]">
          <h4 className="text-[16px] mb-4 text-white pt-">
            SERVICE DE DOMICILIATION
          </h4>
          <h1 className="text-[47px] leading-[50px] font-extrabold text-white">
            Domiciliation Solutions enregistre votre entreprise au registre du
            commerce en Suisse
          </h1>
          <button
            className="bg-primary font-bold rounded-md text-[16px] mt-10 text-white px-[36px] py-[8px]"
            onClick={() => {
              console.log("logged out");
            }}
          >
            Nous contacter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
