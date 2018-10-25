//把常用的操作封装成独立的模块，将来在项目中可以直接把文件拖拽到项目目录，import引入相应模块即可。
//开发中常用的逻辑：
//1,日期格式化
//2,cookie 操作
//3,ajax
//4,获取IP和城市


export default {
    getCookie(c_name) {
        if (document.cookie.length > 0) {
           var c_start = document.cookie.indexOf(c_name + "=")
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1
               var  c_end = document.cookie.indexOf(";", c_start)
                if (c_end == -1) c_end = document.cookie.length
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    },
    //设置cookie，包括cookie名称，cookie的值，cookie的过期时间(天)
    setCookie(cname,cvalue,exdays){
        var d = new Date();
        d.setTime(d.getTime()+(exdays*24*60*60*1000));
        var expires = "expires="+d.toGMTString();
        document.cookie = cname+"="+cvalue+"; "+expires;
    }
}