import gamesService from './games.service.js';

const gamesController = {};

gamesController.getGames = (req, res) => {
    const games = gamesService.getGames();
    res.status(200).send({
        games: games
    });
}

gamesController.getGame = (req, res) => {
    const idGame = req.params.idGame;
    const game = gamesService.getGame(idGame);
    res.status(200).send({
        game: game
    });
}

gamesController.addGame = (req, res) => {
    const nameGame = req.body.name;
    const minPlayers = req.body.minPlayers;
    const maxPlayers = req.body.maxPlayers;
    const duration = req.body.duration;
    const gameState = req.body.gameState;
    if (Number.isNaN(minPlayers) || Number.isNaN(maxPlayers) || Number.isNaN(duration)) {
        res.status(400).send({
            msg: "Body con formato erroneo, los campos minPlayers, maxPlayers y duration deben ser números."
        })
    }
    else {
        const game = gamesService.addGame(nameGame, minPlayers, maxPlayers, duration, gameState)
        res.status(200).send({
            msg: "Juego añadido exitosamente.",
            game: game
        });
    }
}


export default gamesController;