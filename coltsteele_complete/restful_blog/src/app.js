import express from 'express';
import methodOverride from 'method-override';
import expressSanitizer from 'express-sanitizer';
import db from '../db/models';

const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/blogs', (req, res) => {
  db.Blog.all()
    .then(blogs => {
      res.render('index', {blogs});
    })
    .catch(err => res.send(err));
});

app.post('/blogs', (req, res) => {
  const { title, image } = req.body.blog;
  let { body } = req.body.blog;
  body = req.sanitize(body);
  db.Blog.create({title, image, body})
    .then(() => {
      res.redirect('/blogs');
    })
    .catch(err => res.send(err));
  });
  

app.get('/blogs/new', (req, res) => {
  res.render('new');
});

app.get('/blogs/:id', (req, res) => {
  db.Blog.findById(req.params.id)
    .then(blog => res.render('show', {blog}))
    .catch(err => res.redirect('/blogs'));
});

app.get('/blogs/:id/edit', (req, res) => {
  db.Blog.findById(req.params.id)
    .then(blog => {
      res.render('edit', {blog});
    });
});

app.put('/blogs/:id', (req, res) => {
  const { title, image } = req.body.blog;
  let { body } = req.body.blog;
  body = req.sanitize(body);
  db.Blog.findById(req.params.id)
    .then(blog => {
      if (!blog) {
        return res.status(404).send("Todo not found");
      }
      return blog
        .update({title, image, body})
        .then(() => {
          res.redirect(`/blogs/${blog.id}`)
        })
        .catch(err => res.redirect('/blogs'));
    })
    .catch(err => res.redirect('/blogs'));
});

app.delete('/blogs/:id', (req, res) => {
  db.Blog.findById(req.params.id)
  .then(blog => {
    if (!blog) {
      return res.status(404).send("Todo not found");
    }
    return blog
      .destroy()
      .then(() => {
        res.redirect(`/blogs`)
      })
      .catch(err => res.redirect('/blogs'));
  })
  .catch(err => res.redirect('/blogs'));
})


app.listen(3000, () => {
  console.log('Restul Blog server is running');
});