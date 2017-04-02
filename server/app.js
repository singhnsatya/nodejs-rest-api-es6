import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './routes';

mongoose.connect('mongodb://localhost:27017/reditApi', () => {
	console.log('Connected to database reditApi');
});

const app = express();

app.use(bodyParser.json());

app.use('/api', routes);

//middleware

export default app;
