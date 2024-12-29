"use client";

import React, { useState, useEffect, useRef } from "react";

interface MenuButtonProps {
    text: string; // Tekst på knappen
    className?: string; 
}

const MenuButton: React.FC<MenuButtonProps> = ({ text, className }) => {
    const [isActive, setIsActive] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = () => {
        setIsActive((prev) => !prev);
    };

    // Funksjon for at hvis du klikker utenfor knappen, så lukkes menyen
    // useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //         if(buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
    //             setIsActive(false);
    //         }
    //     };

    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, []);


    return (
        <button 
            ref={buttonRef}
            onClick={handleClick}
            className={`flex flex-col items-center justify-center px-6 py-3 bg-[#000E1E]
            ${isActive ? "text-[#9CEDE9]" : "text-white"} font-medium text-[1rem] 
            tracking-wide rounded-lg hover:text-[#9CEDE9] transition-all duration-300 w-[12rem] ${className}`}
            style={{
                borderRadius: "0.5rem",
                transition: "none",
            }}
        >
            {text}
            {isActive && (
                <div
                    className="w-full h-[2px] mt-1 bg-[#9CEDE9] transition-all duration-300"
                    style={{ transition: "none" }} // Fjerner overgangseffekt for linjen
                    aria-hidden="true"
                ></div>
            )}
        </button>
    );
};

export default MenuButton;