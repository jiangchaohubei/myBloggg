/**
 * Created by PC on 2017/6/9.
 */
/**
 * Created by PC on 2017/6/6.
 */
var express = require('express');
var router = express.Router();
var blog=require('../../models/blog');
var mongoose = require('mongoose');
/* GET home page. */
router.get('/', function(req, res, next) {
    var _id=req.query._id;//id

    blog.findById(mongoose.Types.ObjectId(_id), function (err, blog) {
        res.render('blogView/blogView', { title: '江超的博客',blog:blog ,});
    })


});


//查询文章列表
router.get('/select/singleBlog', function(req, res, next) {
    var _id=req.query._id;//id

    blog.findById(mongoose.Types.ObjectId(_id), function (err, blog) {
        if(err){
            res.jsonp({blog:blog,tresultCode:'0001'});
        }else{
            res.jsonp({blog:blog,tresultCode:'0000'});
        }

    })

})
module.exports = router;