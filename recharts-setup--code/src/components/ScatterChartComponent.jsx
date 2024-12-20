import { Tooltip } from "react-bootstrap";
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
} from "recharts";

const ScatterChartComponent = () => {
  const data = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];
  return (
    <div>
      <ResponsiveContainer width='100%' height={400}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis type='number' dataKey='x' name='stature' unit='cm' />
          <YAxis type='number' dataKey='y' name='weight' unit='kg' />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name='A scatter' data={data} fill='#8884d8' />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterChartComponent;
