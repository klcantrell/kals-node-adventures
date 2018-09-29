module.exports = {
  add(a, b) {
    return a + b;
  },
  square(x) {
    return x ** 2;
  },
  setName(user, fullName) {
    const names = fullName.split(' ');
    return Object.assign(
      {},
      {
        firstName: names[0],
        lastName: names[1],
      }
    );
  },
  asyncAdd(a, b, cb) {
    setTimeout(() => {
      cb(a + b);
    }, 1000);
  },
};
