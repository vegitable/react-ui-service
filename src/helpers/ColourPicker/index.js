const colours = {
  light: [
    '#AFD2E9',
    '#9D96B8',
    '#CAC4CE',
    '#FFF275'
  ],
  dark: [
    '#414066',
    '#584B53',
    '#0000FF',
    '#641E16'
  ]
};

const pickColourPair = () => {
  const pickedColours = {
    light: randomColour(colours.light),
    dark: randomColour(colours.dark)
  }
  return pickedColours;
};

const randomColour = (colourList) => {
  const pickedColour = colourList[
    Math.floor(Math.random() * colourList.length)
  ];
  return pickedColour;
};

export default pickColourPair;