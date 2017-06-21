/**
 * Created by Administrator on 2017/6/4.
 */
var path = require('path');
var ueditor = require("ueditor");

var request = require('request');
var cheerio = require('cheerio');
module.exports=function(app){
    app.use('/', require('./routes/index'));
    app.use('/users', require('./routes/users'));
    app.use('/blogWrite', require('./routes/blogWrite/blogWrite'));
    app.use('/blogs', require('./routes/blogs/blogs'));
    app.use('/blogView', require('./routes/blogView/blogView'));//博客阅读页面
    app.use('/comment', require('./routes/comment/comment'));//网易云跟帖



    app.get('/search', function(req, res) {

        request('http://www.baidu.com', function(error, response, body) {
            if (!error && response.statusCode == 200) {
                $ = cheerio.load(body);
                res.json({
                    cat: $('#head').html()
                });
            }
        })
    });





//ueditor
  app.use("/ueditor/ue", ueditor(path.join(__dirname, 'public'), function (req, res, next) {
  //客户端上传文件设置
  var imgDir = '/img/ueditor/'
  var ActionType = req.query.action;
  if (ActionType === 'uploadimage' || ActionType === 'uploadfile' || ActionType === 'uploadvideo') {
    var file_url = imgDir;//默认图片上传地址
    /*其他上传格式的地址*/
    if (ActionType === 'uploadfile') {
      file_url = '/file/ueditor/'; //附件
    }
    if (ActionType === 'uploadvideo') {
      file_url = '/video/ueditor/'; //视频
    }
    res.ue_up(file_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
    res.setHeader('Content-Type', 'text/html');
  }
  //  客户端发起图片列表请求
  else if (req.query.action === 'listimage') {
    var dir_url = imgDir;
    res.ue_list(dir_url); // 客户端会列出 dir_url 目录下的所有图片
  }
  // 客户端发起其它请求
  else {
    // console.log('config.json')
    res.setHeader('Content-Type', 'application/json');
    res.redirect('/ueditor/nodejs/config.json');
  }
}));
}