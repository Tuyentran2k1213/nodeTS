import { Application, Request, Response } from 'express';
export const express = require('express');

const searchRouter = require('./search.route');
const newsRouter = require('./news.route');

function router(app: Application) {
    app.get('/', (req: Request, res: Response) => {
        res.render('home');
    });
    app.use('/news', newsRouter);
    app.use('/search', searchRouter);
}

module.exports = router;
