// components/Button.tsx
"use client";
import React from 'react';

interface ButtonProps {
  text: string; // Tekst på knappen
  onClick?: () => void; // Funksjon som kjøres ved klikk
  className?: string; // Eventuelle tilleggsstiler
  variant?: "primary" | "secondary"; // primær eller sekundær knapp
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className, variant = "primary" }) => {
  const borderRadius = "1rem 0.25rem 1rem 0.25rem"; // Rundet form

  const styles = {
    primary: {
      bg: "bg-[#000E1E]",
      text: "text-white",
      hoverText: "group-hover:text-[#9CEDE9]",
      border: "border-0", 
      shadow: "bg-[#9CEDE9]",
    },
    secondary: {
      bg: "bg-transparent",
      text: "text-[#9CEDE9]",
      hoverText: "group-hover:bg-[#9CEDE9] group-hover:text-[#005F73]",
      border: "border-[0.1rem] border-2 border-[#9CEDE9] group-hover:border-[#005F73]",
      shadow: "bg-[#005F73]",
    },
  };

  const selectedStyle = styles[variant];
  
  return (
    <div className="relative inline-block group w-[15rem] h-[3.5rem]">
    {/*Skygge*/}
    <div
      className={`absolute rounded-lg transition-transform scale-0 group-hover:scale-100 ${selectedStyle.shadow}`}
      style={{ 
        zIndex: 0,
        top: "0.25rem", // Skyggen vises nedenfor knappen
        left: "0.25rem", // Skyggen forskyves til høyre
        width: "100%",
        height: "100%",
        borderRadius: borderRadius, // Rundet form
        transition: "none", // Ingen animasjon
        }}
    ></div>

    {/*Selve knappen*/}
    <button
      onClick={onClick}
      className={`relative z-10 w-full h-full ${selectedStyle.bg} ${selectedStyle.text} font-sourceSans text-[1rem] font-medium leading-normal tracking-wide ${selectedStyle.hoverText} ${selectedStyle.border} ${className}`}
      style={{
        borderRadius: borderRadius, // Rundet form
        transition: "none", // Ingen animasjon
      }}
    >
      {text}
    </button>
    </div>
  );
};

export default Button;