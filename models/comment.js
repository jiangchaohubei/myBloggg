/**
 * Created by PC on 2017/6/5.
 */
var mongoose=require('mongoose');
var commentSchema=require('../schemas/comment');
module.exports=mongoose.model('comment',commentSchema);