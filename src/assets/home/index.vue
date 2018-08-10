
<style>
  #home-container{
    
  }
</style>
<template>
    <div id="home-container">
          你好！
        <div>
          <el-button @click="test">去测试页面</el-button>
        </div>  
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
       data() {
           return { }
       },
       created() {},
       computed:{
         ...mapGetters([
            'xxx'
         ]),
       },
       methods:{
          test(){
            this.$router.push({
              path:'/test'
            })
          }
        }
    }
</script>
