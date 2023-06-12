import React from 'react';
import LineChart from './LineChart';

const StudentInOutLine = () => {
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Number of Students',
        data: [20, 18, 22, 16, 19, 25, 23],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };
  return (
    <div style={{ padding: '10px' }}>
      <div>
        <h1>Student In-Out</h1>
        <LineChart data={data} />
      </div>
    </div>
  );
};

export default StudentInOutLine;
