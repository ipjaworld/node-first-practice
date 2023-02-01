const express = require('experess');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {title: 'Experess'});
});

module.exports = router;