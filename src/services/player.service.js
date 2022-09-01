const segments = [
  {
    textFillStyle: "#000",
    fillStyle: "#eae56f",
    text: "Player 1",
  },
  {
    textFillStyle: "#000",
    fillStyle: "#89f26e",
    text: "Player 1",
  },
  {
    textFillStyle: "#000",
    fillStyle: "#7de6ef",
    text: "Player 1",
  },
  {
    textFillStyle: "#000",
    fillStyle: "#e7706f",
    text: "Player 1",
  },
  {
    textFillStyle: "#fff",
    fillStyle: "#000",
    text: "Player 1",
  },
  {
    textFillStyle: "#000",
    fillStyle: "#eae56f",
    text: "Player 1",
  },
  {
    textFillStyle: "#000",
    fillStyle: "#89f26e",
    text: "Player 1",
  },
  {
    textFillStyle: "#000",
    fillStyle: "#7de6ef",
    text: "Player 1",
  },
  {
    textFillStyle: "#000",
    fillStyle: "#e7706f",
    text: "Player 1",
  },
  {
    textFillStyle: "#fff",
    fillStyle: "#000",
    text: "Player 1",
  },
];

const getSegments = (language,playersCount) => {
  var text = "";
  switch (language) {
    case "ES":
      text = "Jugador ";
      break;
    case "EN":
      text = "Player ";
      break;

    default:
      text = "Player ";
      break;
  }

  var result = segments.map((currElement, index) => {
    currElement.text = text + (index+1);
    return currElement; 
  });
  return result.slice(0,playersCount);
};

export const playerService = {
  getSegments,
};
