<!-- 我的页面 -->
<template>
  <div class="nav">
    <div class="header-left flex-box">
      <el-icon class="icon" size="20" @click="store.commit('collapseMenu')">
        <Fold />
      </el-icon>
      <!-- 这里用来渲染展示路由菜单 -->
      <ul class="flex-box">
        <li
          v-for="(item, index) in selectMenu"
          :key="item.path"
          :class="{ selected: route.path === item.path }"
          class="tab flex-box"
        >
          <!-- 这里用来渲染菜单图标 -->
          <el-icon size="12">
            <component :is="item.icon" />
          </el-icon>

          <!-- 这里用来渲染菜单名称,并设置菜单名称有跳转功能 -->
          <router-link class="text flex-box" :to="{ path: item.path }">
            {{ item.name }}
          </router-link>

          <!-- 这里用来渲染关闭图标 -->
          <el-icon size="12" class="close" @click="closeTab(item, index)">
            <Close />
          </el-icon>
        </li>
      </ul>
    </div>
    <div class="header-right">
      <el-dropdown @command="handleClick">
        <div class="el-dropdown-link flex-box">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <p class="user-name">admin</p>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="cancel">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="js" setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import {useRoute,useRouter} from 'vue-router'

const store = useStore()
// 获取当前的路由对象
const route = useRoute()

// 获取全部的路由对象
const router = useRouter()
const selectMenu = computed(() => store.state.menu.selectMenu)
//点击关闭标签的处理逻辑函数
const closeTab = (item,index) => {
  store.commit('closeMenu',item)
  //删除的非当前页tag
  if(route.path!== item.path){
    return
  }
  const selectMenuData = selectMenu.value
  //删除的是最后一项
  if(index === selectMenuData.length){
    //如果tag只有一个元素
    if(!selectMenuData.length){
      router.push('/')
    }
    else{
      router.push({
        path:selectMenuData[index-1].path
      })
    }
  } else{ //删除的是中间项tag
         router.push({
          path:selectMenuData[index].path
         })

  }

}


const handleClick = (command) => {
  if(command === 'cancel'){
    //退出登录
    localStorage.removeItem('pz_token')
    localStorage.removeItem('pz_userInfo')
    window.location.href = window.location.origin
}
}
</script>

<style lang="less" scoped>
.flex-box {
  //用来控制布局，单独占用一行
  display: flex;
  align-items: center;
  height: 100%;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px; // 这里的高度可以根据需要调整,控制导航栏高度
  background-color: #fff;
  padding-right: 25px;

  .header-left {
    height: 100%;

    .icon {
      width: 45px;
      height: 100%;
    }

    .icon:hover {
      background-color: #f5f5f5;
      cursor: pointer;
    }

    .tab {
      padding: 0 10px;
      height: 100%;
      .text {
        margin: 0 5px;
      }
      .close {
        visibility: hidden;
      }
      &.selected {
        //代表与tab是同级样式
        a {
          color: #409eff;
        }
        i {
          color: #409eff;
        }
        background-color: #f5f5f5;
      }
    }
    .tab:hover {
      background-color: #f5f5f5;
      .close {
        visibility: inherit;
        cursor: pointer;
        color: #df0fb2;
      }
    }
  }

  .header-right {
    .user-name {
      margin-left: 10px;
    }
  }

  a {
    height: 100%;
    color: #333;
    font-size: 15px;
  }
}
</style>
