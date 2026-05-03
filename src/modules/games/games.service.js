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

gamesService.removeGame = (id) => {
    const index = games.findIndex(g => g.id == id)
    if (index == -1) return null;
    const game = games[index];
    games.splice(index, 1);
    return game;
}

gamesService.updateGame = (id, name, minPlayers, maxPlayers, duration, gameState) => {
    const index = games.findIndex(g => g.id == id);
    if (index == -1) return null;
    const date = games[index].admissionDate;
    const game = {
        id: id,
        name: name,
        minPlayers: minPlayers,
        maxPlayers: maxPlayers,
        duration: duration,
        admissionDate: date,
        gameState: gameState
    }
    games[index] = game;
    return game;
}

export default gamesService;