import { Request, Response } from 'express';
const Controller = require('./Controller');

class SearchController extends Controller {
    instance(req: Request, res: Response) {
        res.render('search');
    }
}

module.exports = new SearchController();
