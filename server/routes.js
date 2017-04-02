import express from 'express';

import basicController from './controllers/basicController';
import userController from './controllers/userController';

const routes = express();

//Basic routes
routes.get('/', basicController.get);
routes.get('/test', basicController.getTest);

//User routes
routes.post('/signup', userController.post);

export default routes;