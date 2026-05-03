import { Router } from 'express';

import gamesRouter from '../modules/games/games.routes.js';

const indexRouter = Router();

indexRouter.use('/games', gamesRouter);


export default indexRouter;