/**
 * Created by PC on 2017/6/15.
 */

var express = require('express');
var router = express.Router();
var comment=require('../../models/comment');


//网易云跟帖回退评论数据
router.post('/wyCreateComment', function(req, res, next) {
    console.log(req.body);
    var data=req.body.data;
    new comment({
        //文章Id
        sourceId:data[0].sourceId,
        //跟贴id
        cid:data[0].comments[0].cid,
        //内容
        content:data[0].comments[0].content,
        //创建时间
        ctime:data[0].comments[0].ctime,
        //父贴id
        pid:data[0].comments[0].pid,
        //发贴ip
        ip:data[0].comments[0].ip,
        //来源 app,web,wap
        source:data[0].comments[0].source,
        //是否匿名跟贴 false：非匿名 true：匿名
        anonymous:data[0].comments[0].anonymous,
        //附件0没有附件 1为图片 2为语音 3为视频
        attachmentType:data[0].comments[0].attachment.type,
        //附件描述
        attachmentDesc:data[0].comments[0].attachment.desc,
        //附件地址
        attachmentInfo:data[0].comments[0].attachment.info,
        ////第三方用户id
        userId:data[0].comments[0].user.userId,
        //昵称
        nickname:data[0].comments[0].user.nickname,
        //头像地址
        avatar:data[0].comments[0].user.avatar,
    }).save(function(err,co){
        if(err){
            console.log(err);
        }else{
            console.log(co);
            res.jsonp({comment:co,resultCode:'0000'});
        }
    })

});


module.exports = router;
