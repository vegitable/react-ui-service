const colours = {
  light: [
    '#AFD2E9',
    '#9D96B8',
    '#CAC4CE',
    '#FFF275',
    '#E6E6FA',
    '#DDA0DD',
    '#FF00FF',
    '#B0E0E6',
    '#87CEFA',
    '#ADD8E6',
    '#90EE90',
    '#98FB98',
    '#00FF00',
    '#F0E68C',
    '#FFE4B5',
    '#FF7F50',
    '#FF0000',
    '#FFA07A'
  ],
  dark: [
    '#414066',
    '#584B53',
    '#0000FF',
    '#641E16',
    '#800080',
    '#4B0082',
    '#9400D3',
    '#0000CD',
    '#00008B',
    '#6B8E23',
    '#556B2F',
    '#006400',
    '#008000',
    '#B22222',
    '#8B0000'
  ]
};

const pickColourPair = () => {
  const pickedColours = {
    light: randomColour(colours.light),
    dark: randomColour(colours.dark)
  }
  return pickedColours;
};

const pickDarkColour = () => {
  const colour = randomColour(colours.dark);
  return colour;
}

const randomColour = (colourList) => {
  const pickedColour = colourList[
    Math.floor(Math.random() * colourList.length)
  ];
  return pickedColour;
};

export {
  pickColourPair,
  pickDarkColour,
};