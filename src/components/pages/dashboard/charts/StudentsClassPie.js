import React from 'react';
import PieChart from './PieChart';

const StudentsClassPie = () => {
  // Sample data for the number of students in each class
  const data = {
    labels: [
      'Class V',
      'Class VI',
      'Class VII',
      'Class VIII',
      'Class IX',
      'Class X',
    ],
    datasets: [
      {
        data: [50, 60, 70, 80, 90, 100], // Sample number of students for each class
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  return <PieChart data={data} />;
};

export default StudentsClassPie;
