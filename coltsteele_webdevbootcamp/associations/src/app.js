import db from '../db/models';

const { User, Post } = db;

// const testUser = User.build({
//   email: 'cloud@strife.ff',
//   name: 'Cloud Strife',
// });

// testUser
//   .save()
//   .then(savedUser => console.log(savedUser))
//   .catch(err => console.log(err));

// const testPost = Post.create({
//   title: 'Reflections on Apples',
//   content: 'They are delicious',
//   userId: 1,
// })
//   .then(savedPost => console.log(savedPost))
//   .catch(err => console.log(err));

// User.findOne({
//   where: {
//     name: 'Cloud Strife',
//   },
//   include: [{
//     model: Post,
//     as: 'posts',
//   }],
// })
//   .then(user => console.log(user.posts))
//   .catch(err => console.log(err));

Post.findOne({
  where: {
    id: 1,
  },
  include: [{
    model: User,
    as: 'user',
  }],
})
  .then(post => console.log(post.user))
  .catch(err => console.log(err));