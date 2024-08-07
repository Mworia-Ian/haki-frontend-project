// src/components/LawyersGrid.jsx
import React from "react";
import LawyersCard from "./LawyersCard";

const LawyersGrid = ({ lawyers }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-4">
      {lawyers.map((lawyer) => (
        <LawyersCard key={lawyer.id} lawyer={lawyer} />
      ))}
    </div>
  );
};

export default LawyersGrid;
