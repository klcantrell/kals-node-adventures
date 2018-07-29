import express from 'express';
import multer from 'multer';
import cloudinary from 'cloudinary';
import models from '../db/models';
import { isLoggedIn, isCampgroundOwner } from '../src/middleware';

const router = express.Router();
const { Campground, Comment, User } = models;
// MULTER SETUP
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  }
});
const imageFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new error('Only image files are allowed!'), false);
  }
  cb(null, true);
};
const upload = multer({storage, imageFilter});
// CLOUDINARY SETUP
cloudinary.config({
  cloud_name: 'kalalau',
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});


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

router.post('/', isLoggedIn, upload.single('image'), (req, res) => {
  cloudinary.v2.uploader.upload(req.file.path, (err, result) => {
    if (err) {
      req.flash('message', 'Something went wrong');
      return res.redirect('back');
    }
    req.body.campground.image = result.secure_url;
    req.body.campground.user_id = req.user.id;
    Campground.create(req.body.campground)
      .then(() => res.status(200).redirect('/campgrounds'))
      .catch(err => {
        req.flash('message', 'Something went wrong');
        res.redirect('back');
      });
  })
});

router.get('/new', isLoggedIn, (req, res) => {
  res.render('campgrounds/new');
});

router.get('/:id', (req, res) => {
  Campground.findAll({
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
    ],
  }).then(allCampgrounds => {
      const featuredCampground = allCampgrounds.filter(c => c.id === Number(req.params.id))[0];
      res.render('campgrounds/show', {campground: featuredCampground, allCampgrounds});
    }).catch(err => {
      req.flash('fail', 'Something went wrong');
      res.redirect('back');
    });
});

router.get('/:id/edit', isCampgroundOwner, (req, res) => {
  Campground.findById(req.params.id)
    .then(campground => {
      res.render('campgrounds/edit', {campground});
    })
    .catch(err => {
      req.flash('message', 'Something went wrong');
      res.redirect('back');
    });
});

router.put('/:id', isCampgroundOwner, (req, res) => {
  Campground.findById(req.params.id)
    .then(campground => {
      if (!campground) {
        req.flash('message', 'Something went wrong');
        res.redirect('back');
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