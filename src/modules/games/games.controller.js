import gamesService from './games.service.js';

const validateGame = (game) => {
    const keys = ["name", "minPlayers", "maxPlayers", "duration", "gameState"]
    for (let key of keys) {
        if (game[key] == null || (typeof(game[key]) == "string" && game[key].trim() == "") || game[key] <= 0) return false;
        else if ((key == "maxPlayers" || key == "minPlayers" || key == "duration") && isNaN(game[key])) return false;
        else if (game["minPlayers"] > game["maxPlayers"]) return false;
        
    }
    return true;
};

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
    if (game == null) {
        res.status(404).send({
            msg: "Juego no encontrado."
        })
    }
    else {
        res.status(200).send({
            game: game
        });
    }
}

gamesController.addGame = (req, res) => {
    const nameGame = req.body.name;
    const minPlayers = req.body.minPlayers;
    const maxPlayers = req.body.maxPlayers;
    const duration = req.body.duration;
    const gameState = req.body.gameState;
    const valid = validateGame({name: nameGame, minPlayers: minPlayers, maxPlayers: maxPlayers, duration: duration, gameState: gameState})
    if (!valid) {
        res.status(400).send({
            error: "Bad request",
            message: "Body con formato erroneo, no deben haber campos vacíos ni faltantes, y los campos minPlayers, maxPlayers, duration deben ser números mayores que cero."
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

gamesController.removeGame = (req, res) => {
    const idGame = req.params.idGame;
    const game = gamesService.removeGame(idGame);
    if (game == null) {
        res.status(404).send({
            msg: "Juego no encontrado para borrar.",
        });
    }
    else {
        res.status(200).send({
            msg: "Juego removido del catálogo exitosamente.",
            game: game
    });
    }
}

gamesController.updateGame = (req, res) => {    
    let game;
    const idGame = req.params.idGame;
    const name = req.body.name;
    const minPlayers = req.body.minPlayers;
    const maxPlayers = req.body.maxPlayers;
    const duration = req.body.duration;
    const gameState = req.body.gameState;
    const valid = validateGame({name, minPlayers, maxPlayers, duration, gameState});
    if (!valid) {
        res.status(400).send({
            msg: "Actualización PUT no válida, no pueden haber campos nulos o vacíos para el reemplazo completo y los campos minPlayers, maxPlayers, duration deben ser números mayores que cero."
        })
    } else {
        game = gamesService.updateGame(idGame, name, minPlayers, maxPlayers, duration, gameState);
        if (game == null) {
            res.status(404).send({
                msg: "Juego no encontrado para actualizar."
            })
        } else {
            res.status(200).send({
                msg: "Actualización de juego exitosa.",
                game: game
            })
        }
    }
}

export default gamesController;