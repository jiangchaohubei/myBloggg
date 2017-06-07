/**
 * Created by PC on 2017/6/5.
 */
var mongoose=require('mongoose');
var blogSchema=require('../schemas/blog');
module.exports=mongoose.model('blog',blogSchema);