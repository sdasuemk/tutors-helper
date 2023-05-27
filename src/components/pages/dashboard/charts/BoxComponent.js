import React from 'react';

const BoxComponent = ({
  height,
  width,
  boxLabel,
  boxValue,
  checkerTotal,
  thresholdMark,
  colorShade,
  changeType,
}) => {
  const percentage = (boxValue / checkerTotal) * 100;
  let boxColor = '';

  if (percentage <= thresholdMark) {
    boxColor = colorShade;
  } else {
    const diff = percentage - thresholdMark;
    const increment = changeType === 'forward' ? 1 : -1;
    const shadeIncrement = Math.floor((diff / increment) * 10);
    const shade = Math.max(0, Math.min(9, shadeIncrement));

    const rgbValues = colorShade.match(/\d+/g); // Extract RGB values from the string
    const [r, g, b] = rgbValues.map(value => parseInt(value)); // Convert values to integers

    const calculateShade = (value, increment) => {
      const newValue = value + increment;
      return Math.max(0, Math.min(255, newValue));
    };

    const calculateColor = (r, g, b, increment) => {
      const newR = calculateShade(r, increment);
      const newG = calculateShade(g, increment);
      const newB = calculateShade(b, increment);
      return `rgb(${newR}, ${newG}, ${newB})`;
    };

    const shades = [
      calculateColor(r, g, b, 0),
      calculateColor(r, g, b, -10),
      calculateColor(r, g, b, -20),
      calculateColor(r, g, b, -30),
      calculateColor(r, g, b, -40),
      calculateColor(r, g, b, -50),
      calculateColor(r, g, b, -60),
      calculateColor(r, g, b, -70),
      calculateColor(r, g, b, -80),
      calculateColor(r, g, b, -90),
    ];

    boxColor = shades[shade];
  }

  const boxStyle = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundColor: boxColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    color: 'white',
  };

  return (
    <div style={boxStyle}>
      <span>{boxLabel}</span>
      <span>{boxValue}</span>
    </div>
  );
};

export default BoxComponent;
