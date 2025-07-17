<!-- 我的页面 -->
<template>
    <!-- 项目是background-color="#545c64" -->
    <el-menu :style="{width: !isCollapse ? '230px':'64px'}"  active-text-color="#ffd04b" background-color="#082E54" class="my-aside" default-active="2"
        text-color="#fff" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <p class="lg">{{ isCollapse? 'QA':'QA工具测试开发' }} </p>
        <TreeMenu :index="1" :menuData="menuData" />
    </el-menu>
</template>

<script lang="js" setup name="Aside">
import TreeMenu from '@/components/treeMenu.vue';
import {useRouter} from 'vue-router';
import { reactive,computed } from 'vue';
import { useStore } from 'vuex';


const router = useRouter();
const menuData = reactive(router.options.routes[0].children)
console.log(menuData)

const store = useStore()

// 把collapse状态从计算属性store中取出来
const isCollapse = computed(() => store.state.menu.isCollapse)
console.log(store.state)
const handleOpen = () => { }
const handleClose = () => { }

</script>

<style lang="less" scoped>
.my-aside {
    height: 100%;
    .lg{
        font-size: 20px;
        text-align:center;
        height: 50px;
        line-height: 50px;
        color:#fff
    }
}
</style>
