<template>
    <div id="navbar">
        <router-link  to="/login" v-if="!isLogin">登录</router-link>
        <el-dropdown v-else :hide-on-click="false">
            <span class="el-dropdown-link">
                {{admin}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

    </div>

</template>

<script>
    export default {

        data(){

            return {
                isLogin:false,
                admin:""
            }
            
        },
        mounted(){
            var username = this.getCookie('username')
            if(username){
                this.isLogin = true;
                this.admin = username;
            }  

        },
        methods:{
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
            }
        }
    }
</script>

<style lang="scss">
    #navbar {
        text-align: right;
        .el-dropdown-link {
            cursor: pointer;
            color: #409EFF;
        }

        .el-icon-arrow-down {
            font-size: 12px;
        }
    }
</style>