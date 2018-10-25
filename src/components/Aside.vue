<template>
  <div id="aside">
    <!-- <el-button-group>
      <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
      <el-button type="warning" icon="el-icon-share" size="mini"></el-button>
      <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
      <el-button type="info" icon="el-icon-delete" size="mini"></el-button>
    </el-button-group> -->
    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
      :unique-opened="true" active-text-color="#ff0000" :default-openeds="defaultOpeneds" @select="handleSelect"
      :router="true">
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">系统首页</span>
      </el-menu-item>
      <el-submenu index="#">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">产品管理</span>
        </template>
        <el-menu-item index="/Product">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">图片管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">交易管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">支付管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">会员管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>

      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">店铺管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>

      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">店铺管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项5642</el-menu-item>
      </el-submenu>

      <el-submenu index="9">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">文章管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>

      <el-submenu index="10">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>

      <el-submenu index="11">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">管理员管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>

    </el-menu>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false,
        defaultOpeneds: ["2", "3"]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(index, indexPath) {
        alert("选中一个");
        alert(index);
        alert(indexPath);
      }
    }
  };
</script>

<style lang="scss">
  #aside {
    height: 100%;
    width: 100%;

    .el-menu-vertical-demo {
      width: 200px;
    }
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-height: 100%;
  }

  .el-button-group {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    box-sizing: border-box;
    background-color: #f5f5f5;
    // border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;

    button {
      padding: 0px 13px;
      border-radius: 5px;
    }
  }

  .el-menu-vertical-demo {
    li {
      border: 1px solid #e5e5e5;
    }
  }
</style>