import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const AreaChartComponent = ({ data }) => {
  return (
    <div
      style={{ display: 'flex', width: '100%', height: '100%', margin: '10px' }}
    >
      <div style={{ width: '70%' }}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='date' />
            <YAxis />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='assignmentsGiven'
              stackId='1'
              fill='#8884d8'
            />
            <Area
              type='monotone'
              dataKey='studentsAttempted'
              stackId='1'
              fill='#82ca9d'
            />
            <Area
              type='monotone'
              dataKey='studentsPassed'
              stackId='1'
              fill='cyan'
            />
            <Area
              type='monotone'
              dataKey='studentsFailed'
              stackId='1'
              fill='#f67280'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div
        style={{
          width: '30%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '10%',
        }}
      >
        <div
          style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#8884d8',
              marginRight: '5px',
            }}
          ></div>
          <span style={{ color: 'black', fontSize: '9px' }}>
            Assignments Given
          </span>
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#82ca9d',
              marginRight: '5px',
            }}
          ></div>
          <span style={{ color: 'black', fontSize: '9px' }}>
            Students Attempted
          </span>
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: 'cyan',
              marginRight: '5px',
            }}
          ></div>
          <span style={{ color: 'black', fontSize: '9px' }}>
            Students Passed
          </span>
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#f67280',
              marginRight: '5px',
            }}
          ></div>
          <span style={{ color: 'black', fontSize: '9px' }}>
            Students Failed
          </span>
        </div>
      </div>
    </div>
  );
};

export default AreaChartComponent;
