import React from 'react';
import BarChartComponent from './BarChartComponent';

const FeesPayStatus = () => {
  const totalStudents = 100; // Replace with your actual data
  const studentsWithFees = 80; // Replace with your actual data

  return (
    <div>
      <BarChartComponent
        totalStudents={totalStudents}
        studentsWithFees={studentsWithFees}
      />
    </div>
  );
};

export default FeesPayStatus;
