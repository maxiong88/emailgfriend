const phantom = require('phantom');
const crypto = require('crypto');
const sendEmail = require('./email.js');

module.exports = function (type, params) {
    let name = params.name;
    let emailAddress = params.emailAddress;

    let url = `http:localhost:4001/birthday?name=${encodeURI(name)}`;
    //处理路径问题
    console.log(url);

    var secret = crypto.createHash('md5').update(name + new Date().getTime(), 'utf-8').digest('hex');
    var img_name = secret.slice(0, 6) + '-' + new Date().getTime()
    var IMAGES_PATH = "/data1/cache/emailgfriend/" + img_name + ".jpg";//混淆一下路径名，避免图片名称重复

    //获取输出图片名称
    phantom.create().then(function (ph) {
        ph.createPage().then(function (page) {
            page.open(url).then(function (status) {
                page.property('viewportSize', { width:900 , height: 1350});
                page.render(IMAGES_PATH).then(function () {
                    sendEmail(type, emailAddress, IMAGES_PATH, name);
                    ph.exit();
                });
            });
        });
    });
}