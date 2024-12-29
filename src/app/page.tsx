// src/app/page.tsx
"use client";

import React from "react";
import Button from "../components/button";
import Menu from "../components/menu";

{/* Funksjon */}
export default function Home() {
  const handleKarrieredagClick = () => {
    alert("Karrieredag-knappen fungerer!");
  };

  const handlePaameldingClick = () => {
    alert("Påmelding-knappen fungerer!");
  };

  const handleStudentClick = () => {
    alert("Student-knappen fungerer!");
  };

  const handleBedrifterClick = () => {
    alert("Bedrifter-knappen fungerer!");
  };

{/* Knapper */}
  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-gray-100 space-y-6 p-8">
      {/* Karrieredagknapp */}
      <section className="bg-[#EEEFFF] p-6 rounded-lg">
      <Button 
        text="Sjekk ut karrieredagen vår" 
        onClick={handleKarrieredagClick} 
        variant="primary" 
      />
      </section>
      {/* Påmeldingsskjema for bedrifter */}
      <section className="bg-[#FFFFFF] p-6 rounded-lg">
      <Button 
        text="Til påmeldingsskjema" 
        onClick={handlePaameldingClick} 
        variant="primary" 
      />
      </section>
      {/* For studenter og bedrifter */}
      <section className="bg-[#000E1E] p-6 rounded-lg">
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
      </section>

      <section>
      {/* Meny */}
      <Menu text="Meny" />
      </section>
    </div>
  );
}