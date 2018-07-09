import express from 'express';
const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/campgrounds', (req, res) => {
  const campgrounds = [
    {name: 'Salmon Creek', img: 'https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104496f1c07fa7ebb7bd_340.jpg'},
    {name: 'Granite Hill', img: 'https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104496f1c07fa7ebb7bd_340.jpg'},
    {name: 'Mountain Goat\'s Rest', img: 'https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104496f1c07fa7ebb7bd_340.jpg'},
  ];
  res.render('campgrounds', {campgrounds});
});

app.listen(3000, () => {
  console.log('YelpCamp server has started');
});