<template>
    <div id="home">
        
        <div>
            <el-alert :title="title" type="success" center show-icon>
                
            </el-alert>
            <div class="home_top">
            <a href=""><img src="../../assets/imgs/1.png" alt=""></a>
            <a href=""><img src="../../assets/imgs/2.png" alt=""></a>
            <a href=""><img src="../../assets/imgs/3.png" alt=""></a>
            <a href=""><img src="../../assets/imgs/4.png" alt=""></a>
        </div>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>订单统计信息</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <el-table :data="tableData3"  border style="width: 100%">
                                <el-table-column prop="date" label="日期" width="80">
                                </el-table-column>
                                <el-table-column prop="name" label="姓名" width="80">
                                </el-table-column>
                                <el-table-column prop="address" label="地址">
                                </el-table-column>
                            </el-table>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>商品统计信息</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <el-table :data="tableData3"  border style="width: 100%">
                                <el-table-column prop="date" label="日期" width="80">
                                </el-table-column>
                                <el-table-column prop="name" label="姓名" width="80">
                                </el-table-column>
                                <el-table-column prop="address" label="地址">
                                </el-table-column>
                            </el-table>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>会员登录统计信息</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <el-table :data="tableData3"  border style="width: 100%">
                            <el-table-column prop="date" label="日期" width="80">
                            </el-table-column>
                            <el-table-column prop="name" label="姓名" width="80">
                            </el-table-column>
                            <el-table-column prop="address" label="地址">
                            </el-table-column>
                        </el-table>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-light">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>最新消息</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <div v-for="o in 10" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
        </div>

    </div>
</template>

<script>
var then = this;
    export default {
        data() {
            return {
                title: "",
                tableData3: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        },
        
        beforeMount() {
            var username = this.getCookie('username')
            // alert(username)
            if(!username){
               //未登录
                this.$router.push('/login')
            }
            else{
                //已经登录
                var login_time = this.getCookie('login_time')

                var ip_address = localStorage.getItem('cip')
                var city_name = localStorage.getItem('cname')

                this.title = `欢迎使用后台管理系统，本次登录时间为${login_time},登录IP为${ip_address},城市为:${city_name}`
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
    };
</script>

<style lang="scss">
.ss {
  width: 100%;
  height: 41px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #f5f5f5;
}
</style>