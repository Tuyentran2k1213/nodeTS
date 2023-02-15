import { Request, Response } from 'express';
abstract class Controller {
    constructor() {}
    instance(req: Request, res: Response) {
        res.render('');
    }
}

module.exports = Controller;
