import { Router } from 'express';

import gamesController from './games.controller.js';

const gamesRouter = Router();

gamesRouter.get('/', gamesController.getGames);
gamesRouter.get('/:idGame', gamesController.getGame);
gamesRouter.post('/', gamesController.addGame);
gamesRouter.delete('/:idGame', gamesController.removeGame);
gamesRouter.put('/:idGame', gamesController.updateGame);

export default gamesRouter;