<template>
    <template v-for="(item, index) in props.menuData">
        <!-- 没有子菜单的场景判断 -->
        <el-menu-item  @click="handleClick(item,`${props.index}-${item.meta.id}`)"  v-if="!item.children || item.children.length == 0" :index="`${props.index}-${item.meta.id}`"
            :key="`${props.index}-${item.meta.id}`">
            <el-icon size="20">
                <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.name }}</span>
        </el-menu-item>
        <!-- 有子菜单的场景判断 -->
        <el-sub-menu v-else :index="`${props.index}-${item.meta.id}`">
            <template #title>
                <el-icon size="20">
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span>{{ item.meta.name }}</span>
            </template>
            <!-- 递归使用组件，渲染展示 -->
            <tree-menu :index="`${props.index}-${item.meta.id}`" :menuData="item.children" />
        </el-sub-menu>
    </template>

</template>

<script lang='js' setup name='TreeMenu'>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()

const store = useStore()

// 点击菜单
const handleClick = (item, test) => {
    console.log(item,'*******item****')
    store.commit('addMenu',item.meta)
    router.push(item.meta.path)
}

const props = defineProps(['menuData', 'index'])

</script>

<style scoped></style>
