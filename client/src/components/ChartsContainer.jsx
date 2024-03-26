import { useState } from "react";

import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import Wrapper from "../assets/wrappers/ChartsContainer";
const ChartsContainer = ({ data }) => {
  const [barChart, setBarChat] = useState();

  return (
    <Wrapper>
      <h4>Monthly Application</h4>
      <button type="button" onClick={() => setBarChat(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};
export default ChartsContainer;
