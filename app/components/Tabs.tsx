"use client";
import React, { useState } from "react";
import TechIcon from "./TechIcon";

interface TabContent {
  iconName: string;
  name: string;
}

interface TabsProps {
  categories: { [key: string]: TabContent[] };
}

const Tabs = ({ categories }: TabsProps) => {
  const [activeTab, setActiveTab] = useState("technologies");

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`py-2 px-4 rounded ${
              activeTab === category ? "bg-teal-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 md:flex md:flex-wrap gap-4">
        {categories[activeTab].map(({ name, iconName }) => (
          <TechIcon key={name} iconName={iconName} name={name} style="hover:text-primary" />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
