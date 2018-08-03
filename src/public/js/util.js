Date.prototype.format = function(fmt){ //author: meizz
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}
var util={
    isEmpty(obj) {
        if (obj == undefined || obj == null || new String(obj).trim() == '') {
            return true;
        } else {
            return false;
        }
    },
    setData(key,value){
        var curTime = new Date().getTime();
        localStorage.setItem(key,JSON.stringify({data:JSON.stringify(value),time:curTime}));
    },
    getData(key,exp=0){
        var data = localStorage.getItem(key);
        if(this.isEmpty(data)){
            return ''
        }
        var dataObj = JSON.parse(data);
        if ((exp>0)&&(new Date().getTime() - dataObj.time>(exp*1000))) {
            return ''
        }else{
            var dataObjDatatoJson = JSON.parse(dataObj.data)
            return dataObjDatatoJson;
        }
    },
    removeData(key){
        localStorage.removeItem(key)
    },
    interval(func, w, t){
        var interv = ()=>{
            if(typeof t === "undefined" || t-- > 0){
                setTimeout(interv, w);
                try{
                    func.call(null);
                }
                catch(e){
                    t = 0;
                    throw e.toString();  //返回十进制数
                }
            }
        };
        setTimeout(interv, w);
        return { clear() { t = 0 } };
    },

    getHttpText(data,num=1,reArr){
        var text = ''
        var arr=[]
        var errorlength=500
        if (typeof(data) == 'object') {
            for (var i in data) {
                arr=arr.concat(this.getHttpText(data[i],'all',true))
            }
        } else {
            if (data.length > errorlength) {
                return '操作失败'
            }
            text += '<div>' + data + '</div>'
            arr.push(data)
        }
        if(num!=='all'){
            arr=arr.slice(0,num)
        }
        for(var i in  arr){
            text += '<div>' + arr[i] + '</div>'

        }
        if(reArr){
            return arr
        }else{
            return text
        }
    },
    //获取数据类型
    getType(obj){
        //tostring会返回对应不同的标签的构造函数
        var toString = Object.prototype.toString;
        var map = {
            '[object Boolean]': 'boolean',
            '[object Number]': 'number',
            '[object String]': 'string',
            '[object Function]': 'function',
            '[object Array]': 'array',
            '[object Date]': 'date',
            '[object RegExp]': 'regExp',
            '[object Undefined]': 'undefined',
            '[object Null]': 'null',
            '[object Object]': 'object'
        };
        if (obj instanceof Element) {
            return 'element';
        }
        return map[toString.call(obj)];
    },
    //深克隆
    dataClone(data){
        var type = this.getType(data);
        var obj;
        if (type === 'array') {
            obj = [];
        } else if (type === 'object') {
            obj = {};
        } else {
            //不再具有下一层次
            return data;
        }
        if (type === 'array') {
            for (var i = 0, len = data.length; i < len; i++) {
                obj.push(this.dataClone(data[i]));
            }
        } else if (type === 'object') {
            for (var key in data) {
                obj[key] = this.dataClone(data[key]);
            }
        }
        return obj;
    }
}

export default util;
