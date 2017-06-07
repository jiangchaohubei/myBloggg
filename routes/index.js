var express = require('express');
var router = express.Router();
var blog=require('../models/blog');
/* GET home page. */
router.get('/', function(req, res, next) {

      res.render('index', { title: '江超的博客', });

});

//首页查询文章推荐
router.post('/select/blogs', function(req, res, next) {
      var query = blog.count({});
      query.where("status", 0);
      query.exec().then(function (count) {
            query.find().limit(5).then(function (data) {
                  res.jsonp({articles:data,resultCode:'0000'});
            })
      });
})
module.exports = router;
