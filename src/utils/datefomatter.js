export default{

    // 参数1：是日期字符串
    // 参数2：是日期类型(可选的值：1年月日；2：xxxx-xx-xx；3：xxxx/xx/xx)
    getDateWithFormatter(value,type){

        var now = value?new Date(value,type): new Date()

            var year = now.getFullYear()

            var month = now.getMonth();
                month = month < 10 ? `0${month}` : month;

                var day = now.getDate();
                day = day < 10 ? `0${day}` : day;

                var hour = now.getHours();
                hour = hour < 10 ? `0${hour}` : hour;

                var minutes = now.getMinutes();
                minutes = minutes < 10 ? `0${minutes}` : minutes;

                var seconds = now.getSeconds();
                seconds = seconds < 10 ? `0${seconds}` : seconds;
                if(type == 1){
                    return `${year}年${month}月${day}日 ${hour}:${minutes}:${seconds}`
                }
               else if(type == 2){
                   return `${year}-${month}-${day}-${hour}:${minutes}:${seconds}`
                }
                else{
                    return `${year}/${month}/${day}/ ${hour}:${minutes}:${seconds}`
                }
                // var result = `${year}年${month}月${day}日 ${hour}:${minutes}:${seconds}`
    }
}