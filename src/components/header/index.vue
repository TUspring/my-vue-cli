
<style>
  .header .el-col {
    border-radius: 4px;
  }
 .header .bg-purple-dark {
    background: yellow;
  }
  .header .bg-purple {
    background: purple;
    height:300px；
  }
  .header .bg-purple-light {
    background: green;
  }
 .header .grid-content {
    height: 100px;
    border-radius: 4px;
    min-height: 100px;
  }
</style>
<style lang="scss" scoped>
    .header{  
       max-width:1200px;
       margin:0 auto;     
       display:flex;
       align-items:center;
       justify-content:space-between;
       .pc-header{
            .header-ct-1{
                font-size:14px;
                color:#999;
                display:flex;
                padding:0px 20px;
                line-height:34px;
                justify-content:space-between;
                border-bottom:1px solid #fff;
                .welcome-txt{
                }
            }
            .header-ct-2{
            height:100px;
            padding-left:20px;
            display:flex;
            padding:0px 0px 0px 20px;
            justify-content:space-between;
            img{
                width:766px;
                height:96px;
            }
                .ct-2-right{
                    width:330px;
                    height:100px;
                    box-sizing:border-box;
                    padding-top:10px;
                    text-align:center;
                    background-image:url('./images/header_shadow_pic.jpg');
                    p{
                    line-height:28px;
                    }
                }
            }

            .header-nav-box{
                ul{
                height:40px;
                background-color: rgb( 1, 68, 97 );
                li{
                    float:left;
                    width:138px;
                    height:40px;
                    line-height:40px;
                    color:#fff;
                    text-align:center;
                    cursor:pointer;
                }
                }
                .cur{
                    background-color:#fff;
                    color:rgb( 1, 68, 97 )
                }
            }
       }
       .m-header{
           height:50px;
           display:flex;
           align-items:center;
           justify-content:center;
           background-color: rgb( 1, 68, 97 );
           .m-header-tilte{
               color:#fff;
               padding-top:6px;
               h3{
                  font-size:14px;
                  line-height:16px;
                  letter-spacing:4px;
               }
               p{
                 line-height:16px;
                 font-size:10px;
               }
           }
       }
    }
   
</style>
<template lang="html">
   <div class="header">
           <el-col :lg="24" class="hidden-xs-only">
               <div class="pc-header">
                      <div class="header-ct-1">
                         <div class="welcome-txt">您好，欢迎来到广州华成理工职业技术学校官方网站</div>
                         <div>
                            招生办公室：qq在线咨询 | 微信在线咨询 | 固话咨询：020-15451242 | <span style="color:rgb( 1, 68, 97 );">手机咨询：15645678955</span>
                         </div>
                      </div>          
                      <div class="header-ct-2">
                          <div>
                              <img src="./images/logo_title.png" alt="">
                           </div>
                          <div class="ct-2-right">
                              <p>广东省招生代码：8800080</p>
                              <p>广州市招生代码：00321</p>
                              <p>固定电话：020-1234566</p>
                          </div>
                      </div>          
                      <div class="header-nav-box">
                      <ul>
                
                       
                        <li v-for="(i,index) in navListArr" :class="{cur:current==index}" @click="toLink(i.link,index)">{{i.name}}</li>
          
                      </ul>
                      </div>          
                </div>
              </el-col>
               <el-col :xs="24"  class="hidden-sm-and-up">
               <div class="m-header">                 
                  <img style="width:28px;height:28px;margin-right:10px;" src="./images/m_logo.png" alt="">
                  <div class="m-header-tilte">
                     <h3>广州华成理工职业技术学校</h3>
                     <p>guangzhou huacheng vocational and technical school</p>
                  </div>
               </div>
           </el-col>
        </div>
</template>

<script>
    import 'element-ui/lib/theme-chalk/display.css'
    export default {
        data() {
            return {
                current:0,
                navListArr:[
                    {link:'/home',name:'首页'},
                    {link:'/details',name:'详情'},
                    {link:'/home',name:'学校概况'},
                    {link:'/home',name:'学校概况'},
                ],
            };
        },
        beforeMount() {
        },

        methods: {
            toLink(value,key){
                this.current = key
                this.$router.push({
                    path:value
                })
            }
        }
    }
</script>

