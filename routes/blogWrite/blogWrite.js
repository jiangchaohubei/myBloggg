/**
 * Created by Administrator on 2017/6/4.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('blogWrite', { title: '写博客' });
});

module.exports = router;
