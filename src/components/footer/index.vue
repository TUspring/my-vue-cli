
<style lang="scss" scoped>
    .footer{  
       width:100%;
        .pc-footer{
            height:185px; 
            background-color:#014461;                     
            .comtainer{
                max-width:1200px;
                margin:0 auto;   
                display:flex;
                justify-content:space-between;  
                .footer-nav-prompt{
                    flex:1;
                    padding-top:10px;
                    p{
                        color:#eee;
                        font-size:14px;
                        line-height:28px;
                    }
               }
               .middle-box{
                     padding-top:130px;
                     p{ 
                         text-align:center;
                         font-size:14px;
                         color:#eee;
                         line-height:24px;
                     }
               }
               .right-box{
                  div{
                      float:left;
                      padding-top:6px;
                      p{
                         text-align:center;
                         width:130px;
                      }
                  }
                  div:nth-child(1){
                    margin-right:30px;
                    padding-left:80px;
                  }
               }
            }
        } 

        .m-footer{
            width:100%;
            height:120px;
            padding:10px;
            box-sizing: border-box;
            background-color:#014461;
            .m-footer-prompt-l{
               float:left;
               color:#fff;
               font-size:10px;
                p{
                    line-height:16px;
                }
            }
            .m-footer-prompt-r{
                float:right;
                color:#fff;
                font-size:10px;
                margin:10px 70px 0px 0px;
                img{
                    display:inline-block;
                    width:60px;
                    height:60px;
                }
                 p{
                    line-height:16px;
                    text-align:center;
                }
            }
        }
    }
</style>
<template lang="html">
   <div class="footer">      
         <el-col :lg="24" class="hidden-xs-only">
            <div class="pc-footer">
                <div class="comtainer">
                    <div class="footer-nav-prompt">
                        <p>招生热线： 202-15648548    &nbsp;&nbsp;  15645678945 &nbsp; 陈主任</p>
                        <p>在线咨询: 845464456</p>
                        <p>学校地址：广州市天河区珠吉街吉岐路B15总站斜对面</p>
                        <p>友情链接：广东省技校100网</p>
                     </div>
                     <div class="footer-nav-prompt middle-box">
                            <p>粤IPC-24685095</p>
                            <p>@copy-广州华成理工职业技术学校  2001-2018</p>
                     </div>
                     <div class="footer-nav-prompt right-box">
                           <div>
                                <img src="./images/two_dimension_code.jpg" alt="">
                                <p>招生办公室</p>
                           </div>
                           <div>
                                <img src="./images/two_dimension_code.jpg" alt="">
                                <p>招生办公室</p>
                           </div>
                     </div>
                </div>
            </div>
        </el-col>

         <el-col :xs="24"  class="hidden-sm-and-up">
               <div class="m-footer">
                   <div class="m-footer-prompt-l">
                        <p>招生热线： 202-15648548    &nbsp;&nbsp;  15645678945 &nbsp; 陈主任</p>
                        <p>在线咨询: 845464456</p>
                        <p>学校地址：广州市天河区珠吉街吉岐路B15总站斜对面</p>
                        <p>友情链接：广东省技校100网</p>
                        <p>@copy-广州华成理工职业技术学校  2001-2018</p>
                        <p>粤IPC-24685095</p>
                     </div>
                     <div class="m-footer-prompt-r">
                          <img src="./images/two_dimension_code.jpg" alt="">
                          <p>长按微信咨询</p>
                     </div>
               </div>
         </el-col>
   </div>
</template>

<script>

    export default {
        data() {
            return {
            };
        },
        beforeMount() {
        },

        methods: {

        }
    }
</script>
