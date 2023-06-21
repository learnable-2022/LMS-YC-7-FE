import React, { useState } from "react";
import Ratings from "../StudentComponents/StudentExploreComponents/RatingsDisplayed/Ratings";

function FilterButton() {
  const [toggle, setToggle] = useState(false);

  function Filter() {
    setToggle(!toggle);
  }
  return (
    <div className="relative bottom-16 px-16 py-2 mb-auto border-4 inline sm:hidden">
      {toggle && <Ratings />}

      <button onClick={Filter}>Filter</button>
    </div>
  );
}

export default FilterButton;
