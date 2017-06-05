/**
 * Created by Administrator on 2017/6/4.
 */
var express = require('express');
var router = express.Router();
var article=require('../../models/article');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('blogWrite/blogWrite', { title: '写博客' });
});

module.exports = router;
