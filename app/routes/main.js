const Router = require('express').Router;
const { welcome, add, subtract, multiply, divide } = require('./handlers');

const router = Router();

router.get('/', welcome);
router.post('/add', add);
router.post('/subtract', subtract);
router.post('/multiply', multiply);
router.post('/divide', divide);

module.exports = router;