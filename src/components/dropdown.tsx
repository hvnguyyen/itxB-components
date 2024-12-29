"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface DropdownProps {
  title: string;
  content: string;
  children?: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, content, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[40rem] mx-auto bg-[#E4EFFF] p-4 border-b border-gray-400">
      {/* Title Section */}
      <div
        onClick={toggleDropdown}
        className={`flex justify-between items-center w-full py-3 px-4 cursor-pointer ${
          isOpen ? "text-[#7E57C2]" : "text-gray-800"
        } hover:text-[#7E57C2]`}
      >
        
        <h3 className="font-montserrat font-medium text-[20px]">{title}</h3>
        <span> {isOpen ? "^" : "v"}</span>
      </div>

      {/* Content Section */}
      {isOpen && (
        <div className="mt-4 text-gray-700">
          <p>{content}</p>
        </div>
      )}

      {/* Dropdown-innhold med animasjon */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: [0.68, -0.55, 0.27, 1.55], // Bouncy easing
        }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 text-gray-600">{children}</div>
      </motion.div>
    </div>
  );
};

export default Dropdown;