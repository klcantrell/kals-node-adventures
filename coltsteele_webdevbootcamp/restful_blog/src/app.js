import express from 'express';
import db from '../db/models';

const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/blogs', (req, res) => {
  res.status(200).render('index')
})

app.listen(3000, () => {
  console.log('Restul Blog server is running');
})