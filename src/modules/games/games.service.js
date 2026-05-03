const gamesService = {};

let games = [];
let counterID = 0;

gamesService.getGames = () => {
    return games;
}

gamesService.getGame = (id) => {
    for (let game of games) {
        if (game.id == id) return game
    }
    return null;
}

gamesService.addGame = (name, minPlayers, maxPlayers, duration, gameState) => {
    const date = new Date();

    const newGame = {
        id: counterID,
        name: name,
        minPlayers: minPlayers,
        maxPlayers: maxPlayers,
        duration: duration,
        admissionDate: date.toDateString(),
        gameState: gameState
    }
    counterID++;
    games.push(newGame);
    return newGame;
}

gamesService.deleteGame = (id) => {}

export default gamesService;