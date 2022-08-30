const texts = 
    {
        "ES" : {
            "btnPlay" :"Jugar",
            "txtTitle" :"Preguntas con cancha",
            "txtPlayersNumber": "Número de jugadores"
        },
        "EN" : {
            "btnPlay" :"Play",
            "txtTitle" :"Pop questions",
            "txtPlayersNumber": "Number of players"            
        }
    };


    const getTexts = () => {
        return texts;
    };
    


export const componentService = {
    getTexts
}