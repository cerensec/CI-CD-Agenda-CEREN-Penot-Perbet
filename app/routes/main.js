const Router = require('express').Router;
const welcome = require('./handlers').welcome;
const add = require('./handlers').add;

const router = Router();

router.get('/', welcome);
router.get('/add/:a/:b', add);

module.exports = router;