/**
 * Created by PC on 2017/6/5.
 */
var mongoose=require('mongoose');
var ipViewSchema=require('../schemas/ipView');
module.exports=mongoose.model('ipView',ipViewSchema);