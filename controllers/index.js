const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home_routes.js');
const dashboardRoutes = require('./dashboard_routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;