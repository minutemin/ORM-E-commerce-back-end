// require express and express router
const router = require('express').Router();
// require all the routes file in the api
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// use the route files for end points of the api
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

// export router module
module.exports = router;
