import express from 'express';
import request from 'request';

const app = express();
app.set('view engine', 'pug');

const baseUrl = 'http://www.omdbapi.com/?apikey=thewdb';

app.get('/', (req, res) => {
  res.render('search');
});

app.get('/results', (req, res) => {
  const { search } = req.query;
  const url = `${baseUrl}&s=${search}`;
  request(url, (apiErr, apiRes, apiBody) => {
    if (!apiErr && apiRes.statusCode === 200) {
      const data = JSON.parse(apiBody).Search;
      res.render('results', {data});
    }
  });
});

app.listen(3000, () => {
  console.log('movie app has started');
})