import React from "react";
import LawyersCard from "./LawyersCard";

const LawyersGrid = ({ lawyers }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {lawyers.map((lawyer) => (
        <LawyersCard key={lawyer.id} lawyer={lawyer} />
      ))}
    </div>
  );
};

export default LawyersGrid;
