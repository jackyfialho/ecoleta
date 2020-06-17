import { Request, Response } from 'express';
import knex from '../database/connection';

class TesteController{
    async create(request : Request, response : Response) {
        const teste = request.body;

        console.log(teste);
    }
}

export default TesteController;