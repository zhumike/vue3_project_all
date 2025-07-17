<template>
  <div class="common-layout">
    <el-container>
      <!-- <el-aside width="200px">Aside</el-aside> -->
      <Aside />
      <el-container class="ec">
      <!-- <el-container> -->

        <!-- <el-header>Header</el-header> -->
        <Header />
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script lang="js" setup name="Layout">
import Aside from '@/components/aside.vue'
import Header from '@/components/navHeader.vue'

</script>

<style lang='less' scoped>
.common-layout {
  height: 100%;
  .el-container {
    height: 100%;
  }

  // 主页内容布局实现，使用上下布局方式
  .ec {
    display: flex;
    flex-direction: column;
    height: 100%; 
  }

}
</style>