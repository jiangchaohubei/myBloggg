var express = require('express');
var router = express.Router();
var blog=require('../models/blog');
/* GET home page. */
router.get('/', function(req, res, next) {

      res.render('index', { title: '江超的博客', });

});

//首页查询文章推荐
router.post('/select/blogs', function(req, res, next) {
      var sortName="_id";  //按。。排序
      var sord = -1; //降序
      var sort = {};
      sort[sortName] = sord;
      var query = blog.count({});
      query.where("status", 0);
      query.exec().then(function (count) {
            query.find().sort(sort).limit(5).then(function (data) {
                  res.jsonp({articles:data,resultCode:'0000'});
            })
      });
})
module.exports = router;
