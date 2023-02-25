import react from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); //will give an array of 12 values
  const totalMaximum = Math.max(...dataPointValues); //by using spread operator we convert it into 12 arguments as max function me we cannot pass an array
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
