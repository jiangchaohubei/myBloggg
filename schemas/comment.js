/**
 * Created by PC on 2017/6/16.
 */
var mongoose=require('mongoose');

module.exports=new mongoose.Schema({
    //文章Id
    sourceId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"blog"
        },
    //跟贴id
    cid:{
        type:String,
        default:"",
    },
    //内容
    content:{
        type:String,
        default:"",
    },
    //创建时间
    ctime:{
        type:Number,
        default:new Date().getTime(),
    },
    //父贴id
    pid:{
        type:String,
        default:"",
    },
    //发贴ip
    ip:{
        type:String,
        default:"",
    },
    //来源 app,web,wap
    source:{
        type:String,
        default:"",
    },
    //是否匿名跟贴 false：非匿名 true：匿名
    anonymous:{
        type:Boolean,
        default:false,
    },
    //附件0没有附件 1为图片 2为语音 3为视频
    attachmentType:{
        type:String,
        default:"",
    },
    //附件描述
    attachmentDesc:{
        type:String,
        default:"",
    },
    //附件地址
    attachmentInfo:{
        type:String,
        default:"",
    },
    ////第三方用户id
    userId:{
        type:String,
        default:"",
    },
    //昵称
    nickname:{
        type:String,
        default:"",
    },
    //头像地址
    avatar:{
        type:String,
        default:"",
    },


})