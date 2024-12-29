// src/app/page.tsx
"use client";

import React from "react";
import Button from "../components/button";

export default function Home() {
  const handleKarrieredagClick = () => {
    alert("Karrieredag-knappen fungerer!");
  };

  const handleStudentClick = () => {
    alert("Student-knappen fungerer!");
  };

  const handleBedrifterClick = () => {
    alert("Bedrifter-knappen fungerer!");
  };


  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-gray-100 space-y-6 p-8">
      {/* Primærknapp */}
      <div className="bg-[#EEEFFF] p-6 rounded-lg">
      <Button 
        text="Sjekk ut karrieredagen vår" 
        onClick={handleKarrieredagClick} 
        variant="primary" 
      />
      </div>
      {/* Sekundærknapp */}
      <div className="bg-[#000E1E] p-6 rounded-lg">
      <div className="flex space-x-6">
      <Button 
        text="For studenter" 
        onClick={handleStudentClick} 
        variant="secondary" 
      />
      <Button 
        text="For bedrifter" 
        onClick={handleBedrifterClick} 
        variant="secondary" 
      />
      </div>
      </div>
    </div>
  );
}