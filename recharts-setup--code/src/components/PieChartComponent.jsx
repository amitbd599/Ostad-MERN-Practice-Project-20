import { Tooltip } from "react-bootstrap";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const PieChartComponent = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  return (
    <div>
      <ResponsiveContainer width='100%' height={400}>
        <PieChart>
          <Pie
            dataKey='value'
            data={data}
            cx='50%'
            cy='50%'
            outerRadius={80}
            fill='#8884d8'
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
