<template lang="html">
    <div id="app-main" class="app-main">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

export default {
}

</script>

<style lang="scss">
body,html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    
    .app-main {
        width: 100%;
        height: 100%;
        .el-main{
            background-color:#f1f2f7;
            /*padding:0px 30px 20px 20px;*/
        }    
    }
}
</style>
