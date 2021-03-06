import express from 'express';
import http from 'http';
import morgan from 'morgan';
import cors from 'cors';
import env from './env';
import router from './router';

const app = express();
const PORT = process.env.PORT || 3090;

// APP SETUP
app.set('view engine', 'pug');
app.use(morgan('combined'));
app.use(cors());
app.use(express.json({type: '*/*'}));
router(app);


// SERVER SETUP
const server = http.createServer(app);
server.listen(PORT);
console.log('Server listening on:', PORT);