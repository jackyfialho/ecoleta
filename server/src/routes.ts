import express from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import TesteController from './controllers/TesteController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();
const testeController = new TesteController();

routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.post('/teste', testeController.create);

// caso receba mais d uma image, usar array em vez de single
routes.post('/points', upload.single('image'), pointsController.create);

export default routes;

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