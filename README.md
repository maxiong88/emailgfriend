# emailgfriend

简易的给特定人发邮件

如果批量发送简易使用 xlsx

module模块

exports.f 是 module.exports.f 的简洁形式

多个exports.f 可共存

如果出现了 module.exports = {} 则只导出这一个,不管位置在哪里

phantom 服务器必须设置字体，否则无法展示中文

需要配置 SMTP 邮件信息等

在node层需要做好边界处理，不然服务端出错，整个服务瘫痪