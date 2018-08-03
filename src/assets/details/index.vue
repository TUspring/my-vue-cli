 <style lang="scss" scoped>
    .comtainer{
        max-width:1200px;
        margin:0 auto; 
        display:flex;
        justify-content:space-between;
            .details-left{
                width:100%;
                max-width:870px;
                .notice-header{
                    background-color:#fff;
                    h3{
                        line-height:50px;
                        text-align:center;
                        font-size:24px;
                        color:#333;
                    }
                    p{
                        font-size:14px;
                        color:#acacac;
                        padding:0px 20px;
                        margin-bottom:10px
                    }
                    .notice-icon{
                        text-align:center;
                        margin-top:20px;
                        padding-bottom:10px;
                        span{
                            margin:0px 20px;
                           color:#acacac;
                        }
                    }
                }
                .notice-txt{
                    margin-top:6px;
                    height:300px;
                    padding:20px;
                    font-size:14px;
                    background-color:#fff;
                }
                .comment-header{
                    height:50px;
                    line-height:50px;
                    margin-top:6px;
                    background-color:#fff;

                    p{
                       padding-left:10px; 
                       font-size:16px;
                       color:#9a5100;
                    }
                }
                .comment-box{
                    height:250px;
                    margin-top:6px;
                    background-color:#fff;
                }
            }
            .details-right{
                width:320px;
            }
    }
 </style>
<style>
  #home-container .el-carousel__button{
    width:20px;
    height:4px;
  }
</style>
<template>
    <div id="home-container">
         <el-col :lg="24" class="hidden-xs-only">
            <div class="comtainer">
             <div class="details-left">
                  <div class="notice-header">
                   <h3>广州华成理工职业技术学校 2018秋季招生简章</h3>
                   <p>概要：广州华成理工职业技术学校 
                   2018秋季招生简章广州华成理工职业技术学校 
                   2018秋季招生简章广州华成理工职业技术学校 
                   2018秋季招生简章广州华成理工职业技术学校 
                   2018秋季招生简章广州华成理工职业技术学校 
                   2018秋季招生简章广州华成理工职业技术学校...  </p>
                   <div class="notice-icon">
                     <span><i class="el-icon-view"></i>1244人</span>
                     <span><i class="el-icon-edit-outline
"></i>1244人</span>
                     <span>发布时间：2018-05-17</span>
                   </div>
                  </div>
                  <div class="notice-txt">
                        <p>  
                         字体常规，一般14号，颜色就是这个字
                        体常规，一般14号，颜色就是这个字体常
                        规，一般14号，颜色就是这个字体常规，</p>
                   </div>
                  <div class="comment-header">
                   <p>| 评论区（15条评论）</p>
                  </div>
                  <div class="comment-box"></div>
             </div>
             <div class="details-right">
              <app-other></app-other>
             </div>
           </div>
        </el-col>

         <el-col :xs="24"  class="hidden-sm-and-up">
          
         </el-col>
    </div>
</template>

<script>
import AppOther from '@/components/other'
    export default {
        components:{
            AppOther,
            },
          data() {
                return {

                }
            },
            created() {

            },
            computed:{ 
            },
            methods:{

            }
    }
</script>