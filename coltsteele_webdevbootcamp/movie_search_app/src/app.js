import express from 'express';
import request from 'request';

const app = express();
app.set('view engine', 'pug');

const baseUrl = 'http://www.omdbapi.com/?apikey=thewdb';

app.get('/results', (req, res) => {
  request(`${baseUrl}&s=star`, (apiErr, apiRes, apiBody) => {
    if (!apiErr && apiRes.statusCode === 200) {
      res.render('results', {data: apiBody});
    }
  });
});

app.listen(3000, () => {
  console.log('movie app has started');
})