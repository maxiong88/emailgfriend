let XLSX = require('xlsx');
let Job = require('cron').CronJob;
let rmdir = require('rimraf');
let moment = require('moment');
let MomentTime = require('./tool.js').momentTime
let phantom = require('./phantom.js');
const ConfigFriend = require('./config.js').gfriend;
const BIRTHDAY = 'brithday';
function interval() {
    //清除已生成的邮件图片
    rmdir('/cache/emailgfriend', function (error) {
        if (error) {
          console.log(error)
        }
    });
    //获取日期相关
    Promise.resolve().then(function(){
        phantom(BIRTHDAY, {
            name: ConfigFriend.name,
            emailAddress: ConfigFriend.emailAddress,
        });
    }).catch((err)=>{
        console.log('抛出错误信息')
        console.log(err);
    })
}

module.exports = function () {
    var job = new Job('00 00 09 * * *', function () {
        interval();
    });
    job.start();
}

