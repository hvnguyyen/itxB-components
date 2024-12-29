// src/app/page.tsx
"use client";

import React from "react";
import Button from "../components/button";
import Menu from "../components/menu";
import Dropdown from "../components/dropdown";

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

    {/* Dropdown for studenter */}
      <section className="flex gap-6 w-full">
        <div className="min-h-screen bg-[#E4EFFF] p-6 space-y-4">
        <Dropdown 
        title="Møte bedrifter"
        content="Det vil være stands fra bedrifter som ønsker å rekruttere studenter. 
        Her vil du få muligheten til å snakke med representanter fra bedriften og få vite mer om hva de driver med,
        hvilke muligheter de har og hvordan du kan søke jobb hos dem."  
        />
        <Dropdown 
        title="Ballongslipp"
        content="Vi har ballongslipp med premier før lynpresentasjonene, så her er det smart å være tidlig ute!"  
        />
        <Dropdown 
        title="Lynpresentasjoner"
        content="Usikker på hvem du skal snakke med? Her vil du få muligheten til å få en kort 
        presentasjon av bedriften, og deretter kan du bestemme om du vil snakke mer med dem."  
        />
        <Dropdown 
        title="Konseptpresentasjoner"
        content="Presentasjoner av konsepter som er relevant for IT-bransjen."  
        />
        <Dropdown 
        title="Møte bedrifter"
        content="Det vil være stands fra bedrifter som ønsker å rekruttere studenter. Her vil du få muligheten til å snakke med representanter fra bedriften..."  
        />
        <Dropdown 
        title="Workshops"
        content="Det vil være ulike workshops som du kan delta på. Her vil du få muligheten til å lære mer 
        om ulike temaer som er relevante for deg som student."  
        />
        <Dropdown 
        title="Bankett"
        content="Studenter som gir et positivt inntrykk av seg selv på karrieredagene kan kanskje være heldige å få tak i en gullbillett til banketten.
        Mer informasjon gis til de heldige."  
        />
      </div>

      {/* Dropdown for bedrifter*/}
      <div className="min-h-screen bg-[#E4EFFF] p-6 space-y-4">
        <Dropdown 
        title="Møte studenter på stand"
        content="Alle som deltar på karrieredagene får en stand hvor de kan møte studenter og fortelle om bedriften sin.
        Det er også mulig å finne områder for lynintervjuer."  
        />
        <Dropdown 
        title="Lynpresentasjoner"
        content="3 minutters kort introduksjon av bedriften for å informere om studentene om at dere står på stand og gjerne litt kort 
        om hvorfor de skal besøke nettopp deres stand.
        Lynpresentasjoner skjer på starten av dagen før standområdet åpnes. Vi har ballongslipp med premier før lynpresentasjonene
        for å tiltrekke oss flere studenter på morgenen."  
        />
        <Dropdown 
        title="Konseptpresentasjoner"
        content="20 minutters presentasjon av bedriften eller et tema som er spesielt interessant for deres bedrift. 
        Det vil være enkel snacks og drikke tilgjengelig, uten ekstra kostnader."  
        />
        <Dropdown 
        title="Workshops"
        content="60 minutters med studenter. Det vil være enkel snacks og drikke tilgjengelig, uten ekstra kostnader. 
        Vi lager påmeldingsside for presentasjonen. Dersom det er ledige plasser ved start, slipper vi inn de som ønsker, så lenge det er ledig plass. 
        Dere er selv ansvarlige for å promotere deres workshop, men dere vil få mulighet til å benytte dere av våre kanaler dersom dere ønsker."  
        />
        <Dropdown 
        title="Bankett"
        content="Det er mulig å delta på bankett som avholdes etter karrieredagene. Dere får muligheten til å dele ut ti gullbilletter
        helt fritt til de studentene dere ønsker."  
        />
        <Dropdown 
        title="Frakt"
        content="Vi kan tilby frakt til karrieredagene via en tredjepart. 
        Ta kontakt for mer informasjon."  
        />
        <Dropdown 
        title="Promotering"
        content="Vi kan tilby ekstra promotering på forespørsel. 
        Ta kontakt for mer informasjon."  
        />
        </div>
      </section>
    </div>
  );
}