import React from "react";
import Ratings from "../StudentComponents/StudentExploreComponents/RatingsDisplayed/Ratings";

function FilterButton() {
  
  return (
    <div className="relative bottom-14 px-16 py-2 mb-auto border-4 inline sm:hidden">
      <button >Filter</button>
      <Ratings />
    </div>
  );
}

export default FilterButton;
