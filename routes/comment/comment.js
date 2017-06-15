/**
 * Created by PC on 2017/6/15.
 */

var express = require('express');
var router = express.Router();
var blog=require('../../models/blog');
var mutipart = require('connect-multiparty');
var mutipartMiddeware = mutipart();
/* GET home page. */
//router.get('/', function(req, res, next) {
//    res.render('blogWrite/blogWrite', { title: '写博客' });
//});
//网易云跟帖回退评论数据
router.get('/wyCreateComment', function(req, res, next) {
    console.log(req.body);
    console.log(req.query);
});


module.exports = router;
