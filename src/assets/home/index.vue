<style lang="scss" scoped src="./css/m.css"></style>
<style lang="scss" scoped src="./css/pc.css"></style>
<style>
  #home-container .el-carousel__button{
    width:20px;
    height:4px;
  }
</style>
<template>
    <div id="home-container">
         <el-col :lg="24" class="hidden-xs-only">
          <div class="mian-middle-ct-1 cl">   
           <div class="left-banner-box"> 
                <el-carousel :interval="3000" arrow="always"  height="470px" >
                  <el-carousel-item v-for="item in 4" :key="item">
                    <div class="left-big-banner-box">
                      <img src="./images/banner_p1.jpg" alt="">
                    </div>
                  </el-carousel-item>
                </el-carousel>
           </div>
           <div class="right-details-box"> 
                  <div style="width:320px;">
                      <el-carousel :interval="4000" arrow="always"  height="215px" >
                        <el-carousel-item v-for="item in 4" :key="item">
                          <div class="right-banner-box">
                            <img src="./images/right_banner_p1.jpg" alt="">
                          </div>
                        </el-carousel-item>
                      </el-carousel>
                  </div>
                  <div class="right-notice-prompt">
                    <p class="details-header">
                       <span>| 学校公告</span>
                       <span>更多 ></span>
                    </p>
                     <ul class="notice-list-ul">
                       <li v-for="i in 7">
                            <span class="left-txt">2018秋季招生简章</span>
                            <span class="right-txt">05-13</span>
                       </li>
                     </ul>
                  </div>
           </div>
          </div>

            <div class="mian-middle-ct-2"> 
              <img src="./images/middle_pic.jpg" alt="">  
            </div>

            <div class="mian-middle-ct-3">   
                  <div class="left-content-box"> 
                        <p class="details-header">
                          <span>| 学校公告</span>
                          <span>更多 ></span>
                        </p>
                  </div>
                  <div class="right-content-box"> 
                        <div class="other-prompt" style="width:320px">
                          | 免费领取招生简章
                        </div>
                  </div>
          </div>

          <div class="mian-middle-ct-4">   
                  <div class="left-content-box"> 
                        <div class="article-pic">
                            <img src="./images/article_pic.jpg" alt="">
                        </div>
                        <div class="article-content">
                          <p class="article-title">
                              <span class="sign-txt">招生简章<span class="arrow"></span></span>
                              <span class="title">广州华成理工职业技术学校2018秋季招生简章</span>
                          </p>
                          <p class="prompt">
                              作为常年从事一线招生工作的技校老师，
                              经常碰到学生和家长有这样的担忧：
                              1、怕 选到学风、校风差的学校：
                              打架斗殴时有发生，学不到技能
                              ，还被带坏；学生安全没有保障，
                              家长提心吊胆。2、怕选到教学方法落后、
                              师资力量薄弱的学校：填鸭式理论教学。
                              实操少...
                          </p>
                          <div class="article-reading">
                                <div>
                                  <span><i style="font-size:16px;" class="el-icon-view"></i>1545</span>
                                  <span><i style="font-size:16px;" class="el-icon-news"></i>365</span>
                                  <span><i style="font-size:16px;" class="el-icon-star-off"></i>142</span>
                                </div>
                                <p>2018-5-13</p>
                          </div>
                        </div>
                  </div>
                  <div class="right-content-box"> 
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
        </el-col>

         <el-col :xs="24"  class="hidden-sm-and-up">
             <div class="m-banner-box"> 
                <el-carousel :interval="3000" arrow="always"  height="200px" >
                  <el-carousel-item v-for="item in 4" :key="item">
                    <div class="m-banner">
                      <img src="./images/banner_p1.jpg" alt="">
                    </div>
                  </el-carousel-item>
                </el-carousel>
           </div>
           <div class="m-notice-details">
               <div class="right-notice-prompt">
                    <p class="details-header">
                       <span>| 学校公告</span>
                       <span>更多 ></span>
                    </p>
                     <ul class="notice-list-ul">
                       <li v-for="i in 3">
                            <span class="left-txt">2018秋季招生简章</span>
                            <span class="right-txt">05-13</span>
                       </li>
                     </ul>
                  </div>
                   <div class="small-banner-box">
                      <el-carousel :interval="4000" arrow="never"  height="150px" >
                        <el-carousel-item v-for="item in 4" :key="item">                    
                            <img src="./images/right_banner_p1.jpg" alt="">
                        </el-carousel-item>
                      </el-carousel>
                  </div>
           </div>
           <div class="hot-notice"> 
                     <p class="details-header">
                          <span>热门文章</span>
                          <span>更多 ></span>
                      </p>
            </div>
            <div class="m-notice-box"> 
                        <div class="article-pic">
                            <img src="./images/article_pic.jpg" alt="">
                        </div>
                        <div class="article-content">
                          <p class="article-title">
                              <span class="sign-txt">招生简章<span class="arrow"></span></span>
                              <span class="title">广州华成理工职业技术学校2018秋季招生简章</span>
                          </p>
                          <p class="prompt">
                              作为常年从事一线招生工作的技校老师，
                              经常碰到学生和家长有这样的担忧：
                              1、怕 选到学风、校风差的学校：
                              打架斗殴时有发生，学不到技能
                              ，还被带坏；学生安全没有保障...
                          </p>
                          <div class="article-reading">
                                <div>
                                  <span><i style="font-size:16px;" class="el-icon-view"></i>1545</span>
                                  <span><i style="font-size:16px;" class="el-icon-news"></i>365</span>
                                  <span><i style="font-size:16px;" class="el-icon-star-off"></i>142</span>
                                </div>
                                <p>2018-5-13</p>
                          </div>
                        </div>
                  </div>
                   <div class="other-prompt" >
                          | 免费领取招生简章
                    </div>
                    <div class="m-content-box"> 
                        <div class="other-prompt">
                            <p class="contact">
                              <span>姓名：</span>
                              <input type="text">
                            </p>
                            <p class="contact">
                              <span>联系方式：</span>
                              <input type="text">
                            </p>
                            <p class="contact">
                             <button class="btn">立即领取</button>
                             </p>
                        </div>
                  </div>
         </el-col>
    </div>
</template>

<script>
    import {mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
          data() {
                return {

                }
            },
            created() {

            },
            computed:{
              ...mapGetters([
                'vuexValue'
              ]),
              // vuexValue(){
              //   return this.$store.getters.vuexValue
              // },
              getTodo(){
                return this.$store.state.value
              }    
            },
            methods:{
              ...mapMutations([
                'SUBMIT_STATUS'
              ]),
               ...mapActions([
                'ANYNC_SUBMIT_STATUS',
            ]),
            }
    }
</script>
