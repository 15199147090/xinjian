<template>
    <div id="product">
        <div class="qqww">
            <div class="input">
                <span>产品名称</span>
                <el-input placeholder="请输入内容"></el-input>
            </div>

            <div class="block">
                <span class="demonstration">添加时间</span>
                <el-date-picker v-model="value1" type="date" placeholder="选择日期">
                </el-date-picker>
            </div>
            <div class="button_000">
                <button>查询</button>
            </div>
        </div>

        <div class="sssss">

            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>

        </div>

        <div class="col_bg">

            <el-row :gutter="20">
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <div class="liexing">产品类型列表</div>
                        <el-tree :data="data3" show-checkbox node-key="id" :default-expanded-keys="[2, 3]"
                            :default-checked-keys="[5]">
                        </el-tree>
                    </div>
                </el-col>
                <el-col :span="20">
                    <div class="grid-content bg-purple">
                        <div class="www">
                            <div>
                                <span>每页显示条数</span>
                                <select class="select" name="" id="">
                                    <option value="" selected="selected">10</option>
                                    <option value="">25</option>
                                    <option value="">50</option>
                                    <option value="">100</option>
                                </select>
                            </div>
                            <div>
                                <span>搜索</span>
                                <input type="text">
                            </div>


                        </div>
                        <el-table style="width: 100%" :data="tableData.slice((this.pageNum-1)*this.pageSize,this.pageNum*this.pageSize)">
                            <el-table-column prop="bihao" sortable label="产品编号" width="120">
                            </el-table-column>
                            <el-table-column prop="name" label="产品名称" width="322">
                            </el-table-column>
                            <el-table-column prop="yunjag" label="原价格" width="100">
                            </el-table-column>
                            <el-table-column prop="xianja" label="现价" width="100">
                            </el-table-column>
                            <el-table-column prop="suoshud" label="所属地区、国家" width="150">
                            </el-table-column>
                            <el-table-column prop="jiarsj" sortable label="加入时间" width="190">
                            </el-table-column>
                            <el-table-column prop="shenghzt" sortable label="审核状态" width="120">
                            </el-table-column>
                            <el-table-column prop="zhuangtai" label="状态" width="100">
                            </el-table-column>
                            <el-table-column prop="caozuo" label="操作" width="100">
                            </el-table-column>
                        </el-table>
                        <div class="block">
                            <span class="demonstration">完整功能</span>
                            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                :current-page="currentPage4" :page-sizes="pageSizes" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
                                :total="total">
                            </el-pagination>
                        </div>

                    </div>
                </el-col>

            </el-row>

        </div>

    </div>

</template>

<script>
    export default {
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pageSize = val
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.pageNum = val
            }
        },
        beforeMount() {
            this.total = this.tableData.length
        },

        data() {
            return {
                pickerOptions1: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [
                        {
                            text: "今天",
                            onClick(picker) {
                                picker.$emit("pick", new Date());
                            }
                        },
                        {
                            text: "昨天",
                            onClick(picker) {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                picker.$emit("pick", date);
                            }
                        },
                        {
                            text: "一周前",
                            onClick(picker) {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                picker.$emit("pick", date);
                            }
                        }
                    ]
                },
                value1: "",
                value2: "",

                data3: [
                    {
                        id: 1,
                        label: "一级 2",
                        children: [
                            {
                                id: 3,
                                label: "二级 2-1",
                                children: [
                                    {
                                        id: 4,
                                        label: "三级 3-1-1"
                                    },
                                    {
                                        id: 5,
                                        label: "三级 3-1-2",
                                        disabled: true
                                    }
                                ]
                            }
                        ]
                    }
                ],
                defaultProps: {
                    children: "children",
                    label: "label"
                },

                tableData: [
                    {
                        bihao: "999999",
                        name:
                            "小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y",
                        yunjag: "5467",
                        xianja: "4525",
                        suoshud: "法国",
                        jiarsj: "2014-6-11 11:11:41",
                        shenghzt: "通过",
                        zhuangtai: "已启用",
                        caozuo: "......."
                    },
                    {
                        bihao: "999999",
                        name:
                            "小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y",
                        yunjag: "5467",
                        xianja: "4525",
                        suoshud: "法国",
                        jiarsj: "2014-6-11 11:11:42",
                        shenghzt: "通过",
                        zhuangtai: "已启用",
                        caozuo: "......."
                    },
                    {
                        bihao: "999999",
                        name:
                            "小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y",
                        yunjag: "5467",
                        xianja: "4525",
                        suoshud: "法国",
                        jiarsj: "2014-6-11 11:11:43",
                        shenghzt: "通过",
                        zhuangtai: "已启用",
                        caozuo: "......."
                    },
                    {
                        bihao: "999999",
                        name:
                            "小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y",
                        yunjag: "5467",
                        xianja: "4525",
                        suoshud: "法国",
                        jiarsj: "2014-6-11 11:11:44",
                        shenghzt: "通过",
                        zhuangtai: "已启用",
                        caozuo: "......."
                    },
                    {
                        bihao: "999999",
                        name:
                            "小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y",
                        yunjag: "5467",
                        xianja: "4525",
                        suoshud: "法国",
                        jiarsj: "2014-6-11 11:11:45",
                        shenghzt: "通过",
                        zhuangtai: "已启用",
                        caozuo: "......."
                    },
                    {
                        bihao: "999999",
                        name:
                            "小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y",
                        yunjag: "5467",
                        xianja: "4525",
                        suoshud: "法国",
                        jiarsj: "2014-6-11 11:11:46",
                        shenghzt: "通过",
                        zhuangtai: "已启用",
                        caozuo: "......."
                    },
                    {
                        bihao: "999999",
                        name:
                            "小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y",
                        yunjag: "5467",
                        xianja: "4525",
                        suoshud: "法国",
                        jiarsj: "2014-6-11 11:11:47",
                        shenghzt: "通过",
                        zhuangtai: "已启用",
                        caozuo: "......."
                    },
                    {
                        bihao: "999999",
                        name:
                            "小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y",
                        yunjag: "5467",
                        xianja: "4525",
                        suoshud: "法国",
                        jiarsj: "2014-6-11 11:11:48",
                        shenghzt: "通过",
                        zhuangtai: "已启用",
                        caozuo: "......."
                    },
                    {
                        bihao: "999999",
                        name:
                            "小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y",
                        yunjag: "5467",
                        xianja: "4525",
                        suoshud: "法国",
                        jiarsj: "2014-6-11 11:11:49",
                        shenghzt: "通过",
                        zhuangtai: "已启用",
                        caozuo: "......."
                    }
                ],
                currentPage4: 1,
                pageSizes:[5,10, 25, 50, 100],
                pageSize:5,
                total:'',
                pageNum:'1'
            };


        }
    };
</script>

<style lang="scss">
    .www {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .select {
        width: 70px;
        height: 25px;
    }

    td {
        border: 1px solid #ddd !important;

        div {
            text-align: center;
        }
    }

    .liexing {
        width: 100%;
        height: 40px;
        background-color: #2a8bcc;
        text-align: center;
        line-height: 40px;
        color: white;
    }

    .button_000 {
        button {
            width: 80px;
            height: 98%;
            background: #2a8bcc;
            border: 0;
            border-radius: 4px;
        }
    }

    #product {
        .qqww {
            display: flex;

            .input {
                width: 300px;
            }

            .el-input {
                width: 0 !important;

                .el-input__inner {
                    width: 250px !important;
                }
            }

            .block {
                width: 350px;
                margin-left: 50px;

                div {
                    .el-input__prefix {
                        width: 30px;
                    }
                }
            }

            div span {
                width: 100px;
                text-align: center;
                line-height: 40px;
            }
        }
    }

    .sssss {
        margin-top: 30px;
    }

    .col_bg {
        margin-top: 20px;
    }

    .el-table__header-wrapper {
        .el-table__header {
            .has-gutter {
                border: 1px solid #ddd;

                tr {
                    th {
                        text-align: center;
                        border: 1px solid #ddd !important;
                    }
                }
            }
        }
    }
</style>