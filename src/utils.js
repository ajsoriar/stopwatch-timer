var Utils = {}

Utils.twoDigits = function( strNum ){

    strNum = strNum + '';
    if (strNum.length < 2){

        strNum = "0"+ strNum;
    }
    return strNum
}

export default Utils;