import { Express, Request, Response } from 'express';
import { createShortUrl, handleRedirect, getHistory } from '../controller/short-url.controller';
import validateRequest from '../middleware/validateRequest';
import shortUrlSchema from '../schemas/create-short-url.schema';


function routes(app: Express) {

    app.post('/api/url',validateRequest(shortUrlSchema), createShortUrl);

    app.get('/:id', handleRedirect);

    app.get('/api/history', getHistory);
}

export default routes;