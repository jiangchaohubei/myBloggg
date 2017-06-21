/**
 * Created by PC on 2017/6/6.
 */
var express = require('express');
var router = express.Router();
var blog=require('../../models/blog');
/* GET home page. */
router.get('/', function(req, res, next) {
    var classify="";
    var searchLike="";
    if(req.query.classify!=""&&req.query.classify!=null){
        classify=req.query.classify;
    }
    if(req.query.searchLike!=""&&req.query.searchLike!=null){
        searchLike=req.query.searchLike;
    }
    res.render('blogs/blogs', { title: '江超的博客',classify:classify,searchLike:searchLike });

});


//查询文章列表
router.get('/select/blogs', function(req, res, next) {


    var page=req.query.page;//目标页
    //console.log(req.query);
    var limit=5;          //每页显示数量
    var sortName=req.query.sortName?req.query.sortName:"_id";  //按。。排序
    var sord = -1; //降序
    var sort = {};
    sort[sortName] = sord;

    var query = blog.count({});
    query.where("status", 0);  //已发表
    if(req.query.classify!=""&&req.query.classify!=null){
       query.where("classify").in([req.query.classify]);  //按类别查
    }
    if(req.query.searchLike!=""&&req.query.searchLike!=null){
        console.log(req.query.searchLike);
        query.where("title", new RegExp('/*'+req.query.searchLike+'/*'));
        query.where('authorName', new RegExp('/*'+req.query.searchLike+'/*'));
    }
    query.exec().then(function (count) {
        var totalPages=Math.ceil(count/limit);//总页数
        page = Math.min(page, totalPages);
        var skip = (page - 1) * limit; //查询开始
        query.find().sort(sort).limit(limit).skip(skip).then(function (data) {
            res.jsonp({articles:data,totalPages:totalPages,count:count,page:page,resultCode:'0000'});
        })
    });
})

module.exports = router;