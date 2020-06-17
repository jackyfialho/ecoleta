import express, { RouterOptions } from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import TesteController from './controllers/TesteController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();
const testeController = new TesteController();

// const users = [
//     'Diego',
//     'Cleiton',
//     'Robson',
//     'Jacqueline'
// ]

// routes.get('/users', (request, response) => {
//     const search = String(request.query.search);

//     const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

//     response.json(filteredUsers);
// });

// index, show (trazer específico), create, update, delete

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/teste', testeController.create);
export default routes;