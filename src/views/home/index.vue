<template lang="html">
    <div id="app-home" class='app-home'>
         <app-header></app-header>
         <el-main>
               <router-view></router-view>
         </el-main>
         <app-footer></app-footer>
    </div>
</template>

<script>
import AppFooter from '@/components/footer'
import AppHeader from '@/components/header'

export default {
    name: 'home',
    components:{
       AppFooter,
       AppHeader
    }
}
</script>


<style lang="scss">

.el-header {
    background-color: #ccc;
}
.el-main{
    padding:30px;
    /*padding:4px;*/
    padding:4px;
    padding-bottom:100px;
}
.el-footer {
    background-color: rgb( 1, 68, 97 );
}

</style>
