/**
 * Created by PC on 2017/6/5.
 */
var mongoose=require('mongoose');

module.exports=new mongoose.Schema({
    //文章Id
    sourceId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"blog"
    },
    viewIp:{
        type:String,

    },
    pointIp:{
        type:String,

    }

})
