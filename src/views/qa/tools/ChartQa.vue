<!-- 我的页面 -->
<template>
  <div class="my_echart">
    <h1 style="text-align: center;">QA  ECHART 质量统计</h1>
    <iframe src="/static/P0接口覆盖率折线图.html" class="my_iframe"></iframe>
    <iframe src="/static/接口折线图.html" class="my_iframe"></iframe>
    <iframe src="/static/go代码覆盖率折线图.html" class="my_iframe"></iframe>
  </div>
</template>

<script lang="js" setup>

</script>


<style scoped lang="less">

.my_echart{
    width: 100%;
    height: 100vh;    /* overflow: hidden; */
    padding: 20px;
    /* position: flex; */
    overflow:auto;
    background-color: #ffffff;
}
.my_iframe {
    width: 100%;
    height: 550px;
    border: rgb(22, 12, 5) solid 1px;
    margin-top: 20px;
    background-color: bisque;
}
</style>
