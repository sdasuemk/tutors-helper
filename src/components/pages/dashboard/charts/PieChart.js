import { ArcElement, CategoryScale, Chart, PieController } from 'chart.js';
import React, { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

Chart.register(PieController, ArcElement, CategoryScale);

const PieChart = ({ data }) => {
  const options = {
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          generateLabels: chart => {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => {
                const value = data.datasets[0].data[i];
                const meta = chart.getDatasetMeta(0);
                const style = meta.controller.getStyle(i);
                return {
                  text: `${label}: ${value}`,
                  fillStyle: style.backgroundColor,
                  strokeStyle: style.borderColor,
                  lineWidth: style.borderWidth,
                  hidden: !chart.getDataVisibility(i),
                  index: i,
                };
              });
            }
            return [];
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  useEffect(() => {
    const updateLegendFontSize = () => {
      const legendItems = document.querySelectorAll('.chartjs-legend span');
      const fontSizePercentage = 50 / data.labels.length;
      legendItems.forEach(item => {
        item.style.fontSize = `${fontSizePercentage}%`;
      });
    };

    updateLegendFontSize();
  }, [data.labels.length]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        marginLeft: '10px',
      }}
    >
      <h2 style={{ textAlign: 'Left', fontSize: '0.8rem', marginLeft: '10px' }}>
        Class vs Students
      </h2>
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '50%',
          height: '100%',
        }}
      >
        <Pie data={data} options={options} />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          width: '50%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <PieChartLegend data={data} />
      </div>
    </div>
  );
};

const PieChartLegend = ({ data }) => {
  return (
    <div style={{ margin: '2rem' }}>
      {data.labels.map((label, index) => (
        <div key={index} style={{ fontSize: '0.8rem' }}>
          <span
            style={{
              display: 'inline-block',
              width: '12px',
              height: '12px',
              backgroundColor: data.datasets[0].backgroundColor[index],
              marginRight: '8px',
            }}
          ></span>
          {label}: {data.datasets[0].data[index]}
        </div>
      ))}
    </div>
  );
};

export default PieChart;
