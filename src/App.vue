<template>
  <div id="app">
    <el-container>
      <el-header>
        <!-- 导航栏 -->
        <NavBar></NavBar>
         
      </el-header>
      <div class="ss">
          <div class="button_div">
              <el-button-group>
                <el-button type="info" icon="el-icon-edit"></el-button>
                <el-button type="success" icon="el-icon-share"></el-button>
                <el-button type="primary" icon="el-icon-delete"></el-button>
                <el-button type="warning" icon="el-icon-delete"></el-button>
              </el-button-group>
            </div>
        </div>
      <el-container>
        <el-aside width="200px">
          <!-- 侧栏 -->
          <Aside />
        </el-aside>
        
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>


  </div>
</template>

<script>
  import NavBar from "@/components/NavBar";
  import Aside from "@/components/Aside";
  export default {
    name: "App",
    components: {
      NavBar,
      Aside
    }
  };
</script>

<style lang="scss">
  #aa{
    text-decoration: none;
    float:right;
  }
  #app {

    .el-header,
    .el-footer {
      background-color: #b3c0d1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }

    .el-menu-vertical-demo {
      width: 200px !important;
      min-height: 800px !important;
    }

    .el-aside {
      background-color: #d3dce6;
      color: #333;
      text-align: center;

    }

    .el-submenu .el-menu-item {
      min-width: auto !important;
    }

    .el-main {
      width: 100%;
      height: 100%;
      background-color: white;
    }

    .el-container {
      margin-bottom: 40px;
    }
  }
  .button_div{
    width: 200px;
    background-color: #fafafa;
   border-bottom: 1px solid #ddd;
   border-right: 1px solid #ddd;
  }
</style>