import React, { useState } from "react";
import CourseData from "../../../../Data/CourseData.json";
import FreeCourse from "../../../../Data/FreeCourse.json";
import NewCourse from "../../../../Data/NewCourse.json";

function CoursesDisplayed() {
  const [courseData, setCourseData] = useState(CourseData);
  const [FreecourseData, setFreeCourseData] = useState(FreeCourse);
  const [NewcourseData, setNewCourseData] = useState(NewCourse);
  return (
    <div className=" flex flex-wrap w-screen pl-10 relative right-60 text-2xl sm:w-full sm:left-40">
      {courseData.map((course) => {
        const { id, courseName, Image, Instuctor, Ratings, Score, Amount } =
          course;
        return (
          <div
            key={id}
            className=" w-2/4 px-8  my-2 border-2 rounded-lg py-4 sm:w-2/6"
          >
            <div>
              <img
                src={Image}
                alt={Image}
                className="max-w-none h-20 sm:w-full sm:h-full"
              ></img>
              <p className="mt-2 text-sm not-italic font-bold leading-4">
                {courseName}
              </p>
            </div>
            <div>
              <p className="mt-6 text-base not-italic font-normal leading-5">
                {Instuctor}
              </p>
              <div>
                <p className="my-2">{Ratings}</p>
                <p>{Score}</p>
              </div>

              <p className="text-sm not-italic font-bold leading-5">{Amount}</p>
            </div>
          </div>
        );
      })}
      <p className="px-10 leading-10 text-xl font-bold text-blue-600 sm:my-2 sm:mx-40">
        Check out our FREE COURSES
      </p>
      {FreecourseData.map((course) => {
        const { id, courseName, Image, Instuctor, Ratings, Score, Amount } =
          course;
        return (
          <div
            key={id}
            className=" w-2/4 px-8  my-2 border-2 rounded-lg py-4 sm:w-2/6 "
          >
            <div>
              <img
                src={Image}
                alt={Image}
                className="max-w-none h-20 sm:w-full sm:h-full"
              ></img>
              <p className="mt-2 text-sm not-italic font-bold leading-4">
                {courseName}
              </p>
            </div>
            <div>
              <p className="mt-6 text-base not-italic font-normal leading-5">
                {Instuctor}
              </p>
              <div>
                <p className="my-2">{Ratings}</p>
                <p>{Score}</p>
              </div>

              <p className="text-sm not-italic font-bold leading-5">{Amount}</p>
            </div>
          </div>
        );
      })}
      <p className="px-20 leading-10 text-xl font-bold text-blue-600 sm:my-2 sm:mx-40">
        New Courses For You
      </p>
      {NewcourseData.map((course) => {
        const { id, courseName, Image, Instuctor, Ratings, Score, Amount } =
          course;
        return (
          <div
            key={id}
            className=" w-2/4 px-8  my-2 border-2 rounded-lg py-4 sm:w-2/6 "
          >
            <div>
              <img
                src={Image}
                alt={Image}
                className="max-w-none h-20 sm:w-full sm:h-full"
              ></img>
              <p className="mt-2 text-sm not-italic font-bold leading-4">
                {courseName}
              </p>
            </div>
            <div>
              <p className="mt-6 text-base not-italic font-normal leading-5">
                {Instuctor}
              </p>
              <div>
                <p className="my-2">{Ratings}</p>
                <p>{Score}</p>
              </div>

              <p className="text-sm not-italic font-bold leading-5">{Amount}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CoursesDisplayed;
