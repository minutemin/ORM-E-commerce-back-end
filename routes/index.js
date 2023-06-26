// require express and router
const router = require('express').Router();
// require api folder 
const apiRoutes = require('./api');
// router.use connection with endpoint url api and apiRoutes
router.use('/api', apiRoutes);
// send message when no end point is placed
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});
// export router module
module.exports = router;