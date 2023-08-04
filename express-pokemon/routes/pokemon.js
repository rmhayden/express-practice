var express = require('express');
var router = express.Router();
var pokemonCtrl = require('../controllers/pokemon')

// commented out the initial part below that came with this:
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.get('/', pokemonCtrl.index);

router.get('/:id', pokemonCtrl.getOne);

module.exports = router;