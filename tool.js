const moment = require('moment');
exports.getBirthdatByIdNo = function (iIdNo) {
    var tmpStr = "";

    if (iIdNo.length == 15) {
        tmpStr = iIdNo.substring(6, 12);
        tmpStr = "19" + tmpStr;
        tmpStr = tmpStr.substring(0, 4) + "-" + tmpStr.substring(4, 6) + "-" + tmpStr.substring(6)

        return tmpStr;
    }
    else {
        tmpStr = iIdNo.substring(6, 14);
        tmpStr = tmpStr.substring(4, 6) + "-" + tmpStr.substring(6)

        return tmpStr;
    }
}
exports.momentTime = function(type){
    if(type === 'day'){
        return moment().date() < 10 ? '0' + moment().date()  : moment().date();
    }else if(tyoe === 'month'){
        return (moment().month() + 1) < 10 ? '0' + (moment().month() + 1 ): moment().month() + 1;
    }else if(type === 'year'){
        return moment().year();
    }
}
