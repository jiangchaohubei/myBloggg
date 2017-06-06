/**
 * Created by Administrator on 2017/6/4.
 */
var express = require('express');
var router = express.Router();
var article=require('../../models/article');
var mutipart = require('connect-multiparty');
var mutipartMiddeware = mutipart();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('blogWrite/blogWrite', { title: '写博客' });
});
//发表或保存文章
router.post('/create',mutipartMiddeware, function(req, res, next) {
    var status=req.body.status;
    var content=req.body.content;
   new article({
       authorId:0000001,
       authorName:"岁月神偷",
       viewTimes:100,
       pointNumber:100,
       creatTime:new Date(),
       status:req.body.status,
       picture:"",
       title:req.body.title,
       tag:req.body.tag,
       classify:req.body.classify,
       isCopy:req.body.isCopy,
       copyUrl:req.body.copyUrl,
       content:req.body.content,
   }).save(function(err,article){
       if(err){
           console.log(err);
       }else{
           console.log(article);
           res.jsonp({article:article,resultCode:'0000'});
       }
   })
});
//查询文章
router.post('/select', function(req, res, next) {
    var query = article.count({});
    query.where("status", 0);
    query.exec().then(function (count) {
        query.find().then(function (data) {
            res.jsonp({articles:data,resultCode:'0000'});
        })
    });
})

module.exports = router;
