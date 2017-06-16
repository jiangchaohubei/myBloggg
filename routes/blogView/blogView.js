/**
 * Created by PC on 2017/6/9.
 */
/**
 * Created by PC on 2017/6/6.
 */
var express = require('express');
var router = express.Router();
var blog=require('../../models/blog');
var ipView=require('../../models/ipView');
var mongoose = require('mongoose');
var utils=require('../../utils/date');
/* GET home page. */
router.get('/', function(req, res, next) {
    var _id=req.query._id;//id
    var ip=req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    blog.findById(mongoose.Types.ObjectId(_id), function (err, b) {
        if(b){
            ipView.findOne({"sourceId":_id,"viewIp":ip},function(er,i){
                    if(!i){//该ip第一次访问
                       new ipView({"sourceId":_id,"viewIp":ip}).save(function(e,i){
                           if(e){
                               console.log(e);
                           }
                       })
                        blog.update({"_id": _id}, {
                            $inc: { 'viewTimes': 1 }
                        }, function (e, result) {
                            if(e){
                                console.log(e);
                            }
                        })
                    }
            })
            var creatTime= b.creatTime.toLocaleString();
            res.render('blogView/blogView', { title: b.title+'-江超的博客',blog:b ,creatTime: creatTime});
        }else{
            res.render('error');
        }

    })


});


//查询文章
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
//点赞

router.post('/point', function(req, res, next) {
    var _id=req.body._id;//id
    var pointType=req.body.pointType;
    var ip=req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    ipView.findOne({"sourceId":_id,"pointIp":ip},function(er,i){
        if(!i){//第一次点赞或狂踩
            new ipView({"sourceId":_id,"pointIp":ip}).save(function(e,i){
                    if(e){
                        console.log(e);
                    }
            })
            if(pointType=='up'){
                blog.update({"_id": _id}, {
                    $inc: { 'pointNumber': 1 }
                }, function (err, result) {
                    if(err){
                        console.log(err);
                        res.jsonp({resultCode:"0001",resultDesc:err});
                    }else{
                        res.jsonp({resultCode:"success",resultDesc:"点赞成功"});
                    }
                })
            }else{
                blog.update({"_id": _id}, {
                    $inc: { 'pointDownNumber': 1 }
                }, function (err, result) {
                    if(err){
                        console.log(err);
                        res.jsonp({resultCode:"0001",resultDesc:err});
                    }else{
                        res.jsonp({resultCode:"success",resultDesc:"狂踩成功"});
                    }
                })
            }


        }else{
            res.jsonp({resultCode:"failed",resultDesc:"已经点赞过了"});
        }
    })

})
module.exports = router;