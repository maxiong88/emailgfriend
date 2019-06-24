//引用 nodemailer
var nodemailer = require('nodemailer');
var express = require('express');
//宣告發信物件
var transporter = nodemailer.createTransport({
    service: '',
    host: '',
    port: 587, // SMTP 端口
    secureConnection: true, // 使用 SSL
    auth: {
        user: '', // 邮箱
        pass: ''// 密码
    }
});
function getDefaultOption(){
    return {
        //寄件者
        from: '',
        //收件者
        to: '', 
        // 标题
        subject: '',
        //嵌入 html 的內文
        html: '<img src="cid:unique@nodemailer.com"/>', 
        attachments : [ {
            filename: 'unnamed.jpg',
            path: './images/test.jpg',
            cid: 'unique@nodemailer.com'
        }]
    }
}
module.exports = function(type, emailAddress, IMAGES_PATH ,name){
    var options = getDefaultOption()
    var opts = {
        filename:'感恩一路有你.jpg',
        path: IMAGES_PATH,
        cid: '00001'
    }
    options.html = '<img src="cid:00001"/>';
    options.attachments = [opts]
    //发送邮件给目标用户
    options.to = emailAddress;
    transporter.sendMail(options, function(error, info){
        if(error){
        }else{
            console.log('訊息發送给员工: ' + name+' == '+info.response);
        }
    });
}

