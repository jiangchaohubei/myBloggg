/**
 * Created by PC on 2017/6/5.
 */
var mongoose=require('mongoose');

module.exports=new mongoose.Schema({
    //作者id
    authorId:{
        type:String,
        default:"",
    },
    //作者昵称
    authorName:{
        type:String,
        default:"",
    },
    //观看人次
    viewTimes:{
        type:Number,
        default:0,
    },
    //点赞数
    pointNumber:{
        type:Number,
        default:0,
    },
    //不赞成数
    pointDownNumber:{
        type:Number,
        default:0,
    },
    //评论数量
    commentNumber:{
        type:Number,
        default:0,
    },
    //创建时间
    creatTime:{
        type:Date,
        default:new Date(),
    },
    //状态
    status:{
        type:Number,   //0发表；1草稿；
        default:0,
    },


    //文章图标
    picture:{
        type:String,
        default:"",
    },
    //文章标题
    title:{
        type:String,
        default:"",
    },
    //检索标签
    tag:{
        type:Array,
        default:[],
    },
    //分类
    classify:{
        type:Array,
        default:[],
    },
    //是否原创
    isCopy:{
        type:Boolean,
        default:false
    },
    //转载地址
    copyUrl:{
        type:String,
        default:""
    },
    //正文内容
    content:{
        type:String,
        default:""
    }
})
