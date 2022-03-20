import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import database from './database';

const app = express();

app.use(cors({
    origin: config.get('corsOrigin'),
}));

const port = config.get('port');

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Application is listening at http://localhost:${port}`);
    database();
    routes(app);
})