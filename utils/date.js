/**
 * Created by PC on 2017/6/16.
 */
Date.prototype.toLocaleString = function() {
    var month=this.getMonth()+1;
    var day=this.getDate();
    var hour=this.getHours();
    var minute=this.getMinutes();
    var seconds=this.getSeconds();
    if((this.getMonth()+1)<10){
        month="0"+(this.getMonth()+1);
    }
    if(this.getDate()<10){
        day="0"+this.getDate();
    }
    if((this.getHours())<10){
        hour="0"+this.getHours();
    }
    if((this.getMinutes())<10){
        minute="0"+this.getMinutes();
    }
    if((this.getSeconds())<10){
        seconds="0"+this.getSeconds();
    }
    return this.getFullYear() + "-" + month + "-" + day + "   " + hour + ":" + minute + ":" + seconds;
};