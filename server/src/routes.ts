import express from 'express';
import { celebrate, Joi } from 'celebrate';

import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

// caso receba mais d uma image, usar array em vez de single
routes.post(
    '/points',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude : Joi.number().required(),
            longitude : Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required()
        })
    }, {
        abortEarly: false
    }),
    pointsController.create);

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