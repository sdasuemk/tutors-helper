import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const BarChartComponent = ({ totalStudents, studentsWithFees }) => {
  const data = [
    { name: 'Total Students', value: totalStudents },
    { name: 'Students with Fees', value: studentsWithFees },
  ];

  return (
    <BarChart width={230} height={110} data={data}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='value' fill='#8884d8' />
    </BarChart>
  );
};

export default BarChartComponent;
