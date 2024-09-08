import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Delivered', value: 40 },
  { name: 'Out for delivery', value: 30 },
  { name: 'In transit', value: 20 },
  { name: 'Pending', value: 10 },
];

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40'];

const ShipmentRechart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ShipmentRechart;
