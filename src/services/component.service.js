const texts = {
  ES: {
    btnPlay: "Jugar",
    txtTitle: "Preguntas con cancha",
    txtPlayersNumber: "Número de jugadores",
    txtQuestionDescription : "Preguntale al jugador "
  },
  EN: {
    btnPlay: "Play",
    txtTitle: "Pop questions",
    txtPlayersNumber: "Number of players",
    txtQuestionDescription : "Ask player "
  },
};

const getTexts = () => {
  return texts;
};

export const componentService = {
  getTexts,
};
