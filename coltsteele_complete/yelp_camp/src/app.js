import path from 'path';
import express from 'express';
import session from 'express-session';
import flash from 'connect-flash';
import passport from 'passport';
import methodOverride from 'method-override';
import env from './env';
import passportConfig from '../src/passport';
import indexRoutes from '../routes/index';
import campgroundsRoutes from '../routes/campgrounds';
import commentsRoutes from '../routes/comments';

const PORT = process.env.PORT || 3000;
const app = express();
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname + '/public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.use(session({
  secret: 'not all who wander are lost',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);
app.use(flash()); 


app.use(indexRoutes(passport));
app.use('/campgrounds', campgroundsRoutes);
app.use('/campgrounds/:id/comments', commentsRoutes);


app.listen(PORT, () => {
  console.log('YelpCamp server has started');
});