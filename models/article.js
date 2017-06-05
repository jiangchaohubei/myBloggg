/**
 * Created by PC on 2017/6/5.
 */
var mongoose=require('mongoose');
var articleSchema=require('../schemas/article');
module.exports=mongoose.model('article',articleSchema);