
<style lang="scss" scoped>
    .details-right-component{
          width:320px;
           .small-banner-box{
               img{
                 width:320px;
                 height:215px;
               }
            }
           .notice-prompt{
              margin-top:4px;
              width:320px;
              height:250px;
              .details-header{
                height:40px;
                line-height:40px;
                display:flex;
                justify-content:space-between;
                background-color:#fff;
                padding:0px 10px;
                 span{
                   font-size:16px;
                   color:#9a5100;
                   cursor:pointer;
                 }
              }
              .notice-list-ul{
                padding:10px 0px;
                 li{
                   height:28px;
                   line-height:28px;
                   width:100%;
                   padding:0px 10px;
                   display:flex;
                   justify-content:space-between;
                   box-sizing:border-box;
                     .left-txt{
                       color:#333;

                     }
                     .right-txt{
                       color:#999;
                     }
                 }
              }
            }
          .contact-title-box{
                 width:320px;
                 background-color:#fff;
                 padding-left:10px;
                 box-sizing:border-box;
                 .other-prompt{
                   width:320px;
                   color:#9a5100;
                   line-height:40px;
                    cursor:pointer;
                 }
              } 
             .contact-content-box{
                 width:320px;
                 background-color:#fff;
                 box-sizing:border-box;
                 padding:20px 0px;
                 margin-top:4px;
                 .contact{
                   margin:20px 0px;
                    padding-left: 30px;
                    span{
                      width:80px;
                      display:inline-block;
                      text-align:right;
                      color:#9a5100;
                      font-size:14px;
                    }
                    input{
                      border-top:0px;
                      border-left:0px;
                      border-right:0px;
                      padding:1px 5px;
                      box-sizing:border-box;
                      width:120px;
                      border-bottom:1px solid #9a5100;
                    }
                 }
                 .btn{
                    width:200px;
                    height:40px;
                    line-height:40px;
                    font-size:18px;
                    color:#fff;
                    margin:20px 0px 0px 50px;
                    border-radius: 10px;
                    background-color: rgb( 1, 68, 97 );
                 }
                 .btn:hover{
                   background-color: rgba( 1, 68, 97,.8);
                 }
              }   
    }
</style>
<template>
    <div class="details-right-component">
       <div style="width:320px;">
                 <el-carousel :interval="4000" arrow="always"  height="215px" >
                        <el-carousel-item v-for="item in 4" :key="item">
                          <div class="small-banner-box">
                            <img src="./images/right_banner_p1.jpg" alt="">
                          </div>
                        </el-carousel-item>
               </el-carousel>
         </div>
         <div class="notice-prompt">
                    <p class="details-header">
                       <span>| 学校咨询推荐</span>
                       <span>更多 ></span>
                    </p>
                     <ul class="notice-list-ul">
                       <li v-for="i in 7">
                            <span class="left-txt">2018秋季招生简章</span>
                            <span class="right-txt">05-13</span>
                       </li>
                     </ul>
           </div>
             <div class="contact-title-box"> 
                        <div class="other-prompt" style="width:320px">
                          | 免费领取招生简章
                        </div>
             </div>
             <div class="contact-content-box"> 
                        <div class="other-prompt" style="width:320px">
                            <p class="contact">
                              <span>姓名：</span>
                              <input type="text">
                            </p>
                            <p class="contact">
                              <span>联系方式：</span>
                              <input type="text">
                            </p>
                            <button class="btn">立即领取</button>
                        </div>
                  </div>
    </div>
</template>