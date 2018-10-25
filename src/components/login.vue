<template>
    <div id="login">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.psw"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">dd录</el-button>

            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import datefomatter from "../utils/datefomatter"
export default {
    data(){
        return{
            form:{
                name:'',
                psw:''
            }
        }
    },
    methods:{
        onSubmit(){
            var result = datefomatter.getDateWithFormatter(null,1);
            // var now = new Date()

            // var year = now.getFullYear()

            // var month = now.getMonth();
            //     month = month < 10 ? `0${month}` : month;

            //     var day = now.getDate();
            //     day = day < 10 ? `0${day}` : day;

            //     var hour = now.getHours();
            //     hour = hour < 10 ? `0${hour}` : hour;

            //     var minutes = now.getMinutes();
            //     minutes = minutes < 10 ? `0${minutes}` : minutes;

            //     var seconds = now.getSeconds();
            //     seconds = seconds < 10 ? `0${seconds}` : seconds;

            //     var result = `${year}年${month}月${day}日 ${hour}:${minutes}:${seconds}`
                //发起请求登录
                //请求完成后，保存用户名和登录时间
                document.cookie = 'username=张三';
                document.cookie = `login_time=${result}`;

                //登录完成，保存用户信息后，跳转到首页
                this.$router.push('/')
        }
    }
}
</script>

<style scoped>
</style>