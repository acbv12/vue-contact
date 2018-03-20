/**
 * 工具类引用方法
 */
var getFirstUpperChar = function(str){
    var string = String(str);
    var c = string[0];
    if (/[^\u4e00-\u9fa5]/.test(c)) {
        return c.toUpperCase();
    }
    else {
        return chineseToEnglish(c);
    }
};
var chineseToEnglish = function(c){
    var idx = -1;
    var MAP = 'ABCDEFGHJKLMNOPQRSTWXYZ';
    var boundaryChar = '驁簿錯鵽樲鰒餜靃攟鬠纙鞪黁漚曝裠鶸蜶籜鶩鑂韻糳';
    if (!String.prototype.localeCompare) {
        alert("存在非法姓名");
        throw Error('String.prototype.localeCompare not supported.');
    }
    if (/[^\u4e00-\u9fa5]/.test(c)) {
        return c;
    }
    for (var i = 0; i < boundaryChar.length; i++) {
        if (boundaryChar[i].localeCompare(c, 'zh-CN-u-co-pinyin') >= 0) {
            idx = i;
            break;
        }
    }
    return MAP[idx];
};

/**
 * 用户名排序
 */

export function parseContactList(data,keyName){
    var map = {};
    var c = 'A'.charCodeAt();
    for(; c <= 'Z'.charCodeAt(); c++ ){
        map[String.fromCharCode(c)] = [];
    }
    map['#'] = [];
    var firstCharUpper;
    data.forEach(function(item){
        firstCharUpper = getFirstUpperChar(item[keyName]);
        if (map.hasOwnProperty(firstCharUpper)) {
            map[firstCharUpper].push(item);
        } else {
            map['#'].push(item);
        }
    });

    //排序
    for(var key in map) {
        if( map.hasOwnProperty( key ) && (map[key].length != 0)) {
            map[key].sort(function(a, b){
                return a[keyName].localeCompare(b[keyName], 'zh-CN-u-co-pinyin');
            });
        }
    }

    this.dictMap = map;
    return map;
}