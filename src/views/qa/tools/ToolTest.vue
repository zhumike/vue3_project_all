<script lang="js" setup>
import axios from 'axios'
import jsonpAdapter  from 'axios-jsonp'
import { ref } from 'vue'


const jokecontent = ref('你好')
const value = ref(1)

    // 获取一个笑话
const fetchData = () => {
  // 使用jsonpAdapter来处理跨域请求
  // 使用代理后的路径
  axios.get('/api/api/rand.qinghua?format=json')
    .then(response => {
      const joke = response.data.content
      console.log(joke)
      jokecontent.value = joke
    })
    .catch(error => {
      console.error('There was an error!', error)
    })
}


</script>

<template>
  <div>
    <h1>
      工具测试加载页面
    </h1>
    <button class="bt1" @click="fetchData">获取一个笑话</button>
    <br />
    <textarea class="textarea" v-model="jokecontent"></textarea>
    <br />


    <div class="div1">
      <a-input-number id="inputNumber" v-model="value" :min="1" :max="10" />
      当前值：{{ value }}
    </div>


  </div>
</template>

<style scoped lang="less">

.textarea {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.5;
  resize: vertical;
  width: 500px;
}

.bt1 {
  margin-top: 10px;
  padding: 3px;
  border: 1px solid;
  border-radius: 5px;
  font-size: 14px;
  background-color: #a0af8658;
}

.div1 {
  margin-top: 15px;
  padding: 10px;
  }
</style>
