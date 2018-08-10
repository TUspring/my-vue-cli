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

</style>
