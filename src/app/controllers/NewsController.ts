import { Request, Response } from 'express';
const controller = require('./controller');

class NewsController extends controller {
    instance(req: Request, res: Response) {
        res.render('news');
    }
}

module.exports = new NewsController();
