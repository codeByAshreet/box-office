import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title title="Box Office" subtitle="Are you looking for a Movie or a Actor?"/>
      <Navbar />
      {children}
    </div>
  );
};

export default MainPageLayout;
