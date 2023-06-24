import React from "react";
import "./ExploreDisplay.scss";
import CoursesDisplayed from "../CoursesDisplayed/CoursesDisplayed";
import FilterButton from "../../../FilterButton/FilterButton";
import Ratings from "../RatingsDisplayed/Ratings";

const ExploreDisplay = () => {
  return (
    <div
      id="explore-disp"
      className=" flex px-10 relative top-20 right-56 sm:w-screen sm:static"
    >
      <FilterButton />
      <Ratings />
      <CoursesDisplayed />
    </div>
  );
};

export default ExploreDisplay;
