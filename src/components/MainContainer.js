import React from "react";
import GraphComponent from "./GraphComponent";
import Performance from "./Performance";
import Sentiment from "./Sentiment";
import About from "./About";
import Tokenomics from "./Tokenomics";
import Team from "./Team";
import AlsoLike from "./AlsoLike";

const MainContainer = () => {
  return (
    <div>
      <GraphComponent />
      <Performance />
      <Sentiment />
      <About />
      <Tokenomics />
      <Team />
      <AlsoLike />
    </div>
  );
};

export default MainContainer;
