import express from 'express';
import models from '../db/models';
import { isLoggedIn, isCampgroundOwner } from '../src/middleware';

const router = express.Router();
const { Campground, Comment, User } = models;

router.get('/', (req, res) => {
  Campground.findAll({
    include: [{
      model: User,
      as: 'user',
    }]
  })
    .then(campgrounds => {
      res.status(200).render('campgrounds/index', {campgrounds});
    })
    .catch(err => {
      res.status(400).send(err);
    })
});

router.post('/', isLoggedIn, (req, res) => {
  const { name, image, description } = req.body;
  Campground.create({ 
    name,
    image,
    description,
    user_id: req.user.id,
  }).then(() => res.status(200).redirect('/campgrounds'))
    .catch(err => res.status(400).send(err));
});

router.get('/new', isLoggedIn, (req, res) => {
  res.render('campgrounds/new');
});

router.get('/:id', (req, res) => {
  Campground.findById(req.params.id, {
    include: [
      {
        model: Comment,
        as: 'comments',
        include: [{
          model: User,
          as: 'author'
        }],
      }, 
      {
        model: User,
        as: 'user',
      }
    ]
  }).then(campground => {
      res.status(200).render('campgrounds/show', {campground});
    }).catch(err => res.status(400).send(err));
});

router.get('/:id/edit', isCampgroundOwner, (req, res) => {
  Campground.findById(req.params.id)
    .then(campground => {
      res.render('campgrounds/edit', {campground});
    })
    .catch(err => {
      console.log(err);
      res.redirect('/campgrounds');
    });
});

router.put('/:id', isCampgroundOwner, (req, res) => {
  Campground.findById(req.params.id)
    .then(campground => {
      if (!campground) {
        return res.status(404).send("Campground not found")
      }
      return campground
        .update(req.body.campground)
        .then(() => {
          res.redirect(`/campgrounds/${campground.id}`)
        })
        .catch(err => {
          req.flash('message', 'Something went wrong');
          res.redirect('back');
        });
    })
    .catch(() => {
      req.flash('fail', 'Something went wrong');
      res.redirect('back');
    })
});

router.delete('/:id', isCampgroundOwner, (req, res) => {
  Campground.findById(req.params.id)
    .then(campground => {
      if (!campground) {
        req.flash('fail', 'Something went wrong');
        res.redirect('back');
      }
      return campground
        .destroy()
        .then(() => {
          res.redirect("/campgrounds")
        })
        .catch(err => {
          req.flash('fail', 'Something went wrong');
          res.redirect('back');
        })
    })
    .catch(() => {
      req.flash('fail', 'Something went wrong');
      res.redirect('back');  
    })
});

export default router;