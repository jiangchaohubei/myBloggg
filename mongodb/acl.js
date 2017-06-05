/**
 * Created by PC on 2017/6/5.
 */
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
var dbconnection=mongoose.connect('mongodb://127.0.0.1:27017/myBlog', function (err, db) {

    if(err)
    {
        console.log("数据库链接失败");
    }else {
        console.log("数据库链接成功");
    }
});