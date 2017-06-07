/**
 * Created by PC on 2017/6/6.
 */
var express = require('express');
var router = express.Router();
var blog=require('../../models/blog');
/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('blogs/blogs', { title: '江超的博客', });

});


//查询文章列表
router.get('/select/blogs', function(req, res, next) {
    var page=req.query.page;//目标页
    //console.log(req.query);
    var limit=5;          //每页显示数量
    var sortName=req.query.sortName?req.query.sortName:"createTime";  //按。。排序
    var sord = 1; //降序
    var sort = {};
    sort[sortName] = sord;
    var skip = (page - 1) * limit; //查询开始
    var query = blog.count({});
    query.where("status", 0);  //已发表
    query.exec().then(function (count) {
        var totalPages=Math.ceil(count/limit);//总页数
        page = Math.min(page, totalPages);
        page = Math.max(page, 1);
        query.find().sort(sort).skip(skip).limit(limit).then(function (data) {
            res.jsonp({articles:data,totalPages:totalPages,count:count,page:page,resultCode:'0000'});
        })
    });
})
module.exports = router;