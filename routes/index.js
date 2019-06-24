var express = require('express');
var router = express.Router();

router.get('/birthday', function(req, res) {
    var name = req.query.name;
    res.render('birthday',{name:name})
});

module.exports = router