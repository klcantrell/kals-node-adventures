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

User.findAll({
  include: [{
    model: Post,
    as: 'posts',
  }],
})
  .then(users => console.log(users))
  .catch(err => console.log(err));