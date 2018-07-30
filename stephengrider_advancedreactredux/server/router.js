export default app => {
  app.get('/', (req, res) => {
    res.send(['waterbottle', 'phone', 'things']);
  });
};