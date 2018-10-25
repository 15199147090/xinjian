
export default {


    //获取当前的IP地址
    getIPAddress() {
        
        return new Promise((resolve, reject) => {


            var script = document.createComment('script');
            script.src = 'http://pv.sohu.com/cityjson?ie=utf-8'
            window.onload = function () {
                resolve(returnCitySN["cip"])
            }
        })


    },
    //获取当前城市名称
    getCity() {


        return new Promise((resolve, reject) => {


            var script = document.createComment('script');
            script.src = 'http://pv.sohu.com/cityjson?ie=utf-8'
            window.onload = function () {
                resolve(returnCitySN["cname"])
            }
        })
        


    }
}