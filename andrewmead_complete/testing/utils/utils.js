module.exports = {
  add: (a, b) => a + b,
  square: x => x ** 2,
  setName: (user, fullName) => {
    const names = fullName.split(' ');
    return Object.assign(
      {},
      {
        firstName: names[0],
        lastName: names[1],
      }
    );
  },
};
