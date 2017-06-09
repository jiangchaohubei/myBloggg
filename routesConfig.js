/**
 * Created by Administrator on 2017/6/4.
 */

module.exports=function(app){
    app.use('/', require('./routes/index'));
    app.use('/users', require('./routes/users'));
    app.use('/blogWrite', require('./routes/blogWrite/blogWrite'));
    app.use('/blogs', require('./routes/blogs/blogs'));
    app.use('/blogView', require('./routes/blogView/blogView'));//博客阅读页面
}