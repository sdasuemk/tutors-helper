import React from 'react';
import AreaChartComponent from './AreaChartComponent';

const App = () => {
  const data = [
    {
      date: '2023-05-01',
      assignmentsGiven: 5,
      studentsAttempted: 25,
      studentsPassed: 20,
      studentsFailed: 5,
    },
    {
      date: '2023-05-02',
      assignmentsGiven: 4,
      studentsAttempted: 28,
      studentsPassed: 25,
      studentsFailed: 3,
    },
    {
      date: '2023-05-03',
      assignmentsGiven: 3,
      studentsAttempted: 30,
      studentsPassed: 22,
      studentsFailed: 8,
    },
    // Add more data as needed
  ];

  return (
    <div
      className='chart-container'
      style={{ width: '450px', height: '110px', margin: '10px' }}
    >
      <AreaChartComponent data={data} />
    </div>
  );
};

export default App;
