const questions = {
  ES: [
    "has estado stalkeando a alguien y le diste like a una foto antigua?",
    "has salido a la calle sin ropa interior?",
  ],

  EN: [
    "Have you been stalking anyone and unexpectedly you liked an old photo?",
    "Have you gone outside without underwear?",
  ],
};

const getRandomQuestion = (language) => {
    const localisedQuestions = questions[language];
    return localisedQuestions[Math.floor(Math.random()*localisedQuestions.length)];
};

export const questionService = {
  getRandomQuestion,
};
