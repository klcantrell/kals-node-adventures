const express = require('express');
const app = express();

const ANIMAL_SOUNDS = {
  pig: 'Oink!',
  cow: 'Moo!',
  dog: 'Woof Woof!',
};

app.get('/', (req, res) => {
  res.send('Hi there, welcome to my page!')
});

app.get('/speak/:animal', (req, res) => {
  const { animal } = req.params;
  res.send(`The ${animal.toLowerCase()} says "${ANIMAL_SOUNDS[animal]}"`)
});

app.get('/repeat/:string/:multiplier', (req, res) => {
  const { string, multiplier } = req.params;
  let output = [];
  for (let i = 1; i <= Number(multiplier); i++) {  
    output.push(string);
  }
  res.send(output.join(' '));
});

app.get('*', (req, res) => {
  res.send('Sorry, page not found...What are you doing with your life?');
});

app.listen(3000, () => {
  console.log('server started')
})