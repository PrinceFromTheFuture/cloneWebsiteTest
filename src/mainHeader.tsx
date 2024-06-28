import React from "react";
import CourseAdText from "./components/CourseAdText";

const MainHeader = () => {
  return (
    <div className=" bg-mainBg w-full">
      <div className=" caruselParent bg-primary bg-opacity-5 py-1 overflow-hidden w-full whitespace-nowrap">
        {" "}
        <div className=" carusel inline-block whitespace-nowrap  ">
          <CourseAdText />
          <CourseAdText />

          <CourseAdText />
          <CourseAdText />
          <CourseAdText />
          <CourseAdText />

          <CourseAdText />
          <CourseAdText />
          <CourseAdText />
        </div>
        <div className=" carusel inline-block whitespace-nowrap   ">
          <CourseAdText />
          <CourseAdText />
          <CourseAdText />
          <CourseAdText />

          <CourseAdText />
          <CourseAdText />
          <CourseAdText />
          <CourseAdText />

          <CourseAdText />
        </div>
      </div>
      fsdf
    </div>
  );
};

export default MainHeader;
