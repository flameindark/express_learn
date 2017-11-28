var express = require('express');
import userRoutes from './user.route';

var router = express.Router();


router.use('/users', userRoutes);

module.exports = router;
