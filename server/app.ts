import express, { Express } from 'express';
import { routes } from './routers';

const app: Express = express();

app.use('/', routes)

export default app;