<template>
  <div class="home">
    <Header/>
    <div class="content">
      <div class="desc" style="height:600px">
        <div class="left"> <span><img src="../assets/Disc.jpg" alt=""></span></div>
         <div class="right">
         <div class="fi-titl">This Month's</div>
        <div class="se-titl">Record Breaking Albums !</div>
        <div class="th-cot">Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley,
          One More Of A Stranger, Endless Things, The Heartbeat Stops, Walking Promises,
           Desired Games And Many More..
        </div>
        <div  class="h-btn"><span><button>Listen Now</button></span><span><button>Add To Queue</button></span></div>
         </div>
      </div>
       <div class="r-page">
               <div  class="recently">Recently Played</div>
              <div class="text-center" id="place">
               <v-carousel id="rty" hide-delimiters>
                   <v-carousel-item >
                    <span><img src="../assets/jen.jpg">
                    <div>Dream Your Moment</div>
                    <div class="s-name">Ava cornish</div>
                    </span>
                     <span><img src="../assets/lin.jpg">
                      <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                      <span><img src="../assets/lin2.jpg">
                       <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                       <span><img src="../assets/lin3.jpg">
                        <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                        <span><img src="../assets/lin4.jpg">
                         <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                         <span><img src="../assets/lin5.jpg">
                          <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                   </v-carousel-item>
                     <v-carousel-item >
                    <span><img src="../assets/lin6.jpg">
                     <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                     <span><img src="../assets/lin7.jpg">
                      <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                      <span><img src="../assets/dj.jpg">
                       <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                       <span><img src="../assets/jen.jpg">
                        <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                        <span><img src="../assets/lin.jpg">
                         <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                         <span><img src="../assets/jen.jpg">
                        <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                   </v-carousel-item>
                 </v-carousel>
                 </div>
            </div>
            <div class="weekly">
              <div  class="w-title">Weekly Top 15</div>
              <div class="w-cont" v-for="songs in song" :key="songs.img">
                <div class="leftt"><img src="../assets/disco.jpg"></div>
                <div class="rightt">
                 <div>{{songs.album}}</div>
                <div>{{songs.name}}</div>
                </div>
                 <div class="dura">{{songs.dura}}</div>
                 <div class="w-icon"><v-icon color="white">more_horiz</v-icon></div>
              </div>
            </div>
            <div>
            </div>
                <div class="artist">
               <div  class="recently a-title">Featured Artist's</div>
              <div class="text-center" id="place">
               <v-carousel id="rty" hide-delimiters>
                   <v-carousel-item >
                    <span><img src="../assets/jen.jpg">
                    <div>Dream Your Moment</div>
                    <div class="s-name">Ava cornish</div>
                    </span>
                     <span><img src="../assets/lin.jpg">
                      <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                      <span><img src="../assets/lin2.jpg">
                       <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                       <span><img src="../assets/lin3.jpg">
                        <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                        <span><img src="../assets/lin4.jpg">
                         <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                         <span><img src="../assets/lin5.jpg">
                          <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                   </v-carousel-item>
                     <v-carousel-item >
                    <span><img src="../assets/lin6.jpg">
                     <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                     <span><img src="../assets/lin7.jpg">
                      <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                      <span><img src="../assets/dj.jpg">
                       <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                       <span><img src="../assets/jen.jpg">
                        <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                        <span><img src="../assets/lin.jpg">
                         <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                         <span><img src="../assets/jen.jpg">
                        <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                   </v-carousel-item>
                 </v-carousel>
                 </div>
            </div>
              <div class="album">
             <div  class="recently a-title">Featured Albums</div>
              <div class="text-center" id="place">
               <v-carousel id="rty" hide-delimiters>
                   <v-carousel-item >
                    <span><img src="../assets/jen.jpg">
                    <div>Dream Your Moment</div>
                    <div class="s-name">Ava cornish</div>
                    </span>
                     <span><img src="../assets/lin.jpg">
                      <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                      <span><img src="../assets/lin2.jpg">
                       <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                       <span><img src="../assets/lin3.jpg">
                        <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                        <span><img src="../assets/lin4.jpg">
                         <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                         <span><img src="../assets/lin5.jpg">
                          <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                   </v-carousel-item>
                     <v-carousel-item >
                    <span><img src="../assets/lin6.jpg">
                     <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                     <span><img src="../assets/lin7.jpg">
                      <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                      <span><img src="../assets/dj.jpg">
                       <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                       <span><img src="../assets/jen.jpg">
                        <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                        <span><img src="../assets/lin.jpg">
                         <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                         <span><img src="../assets/jen.jpg">
                        <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                   </v-carousel-item>
                 </v-carousel>
                 </div>
            </div>
            <v-container id="t-gernes">
              <div class="top" style="color:#3BC8E6;">Top Gernes</div>
              <v-row id="grid">
                <v-col id="g-fist"><img src="../assets/romatic.jpg" alt=""></v-col>
                <v-row id="midd">
                  <v-col id="g-sec"><img src="../assets/clasic.jpg" alt=""></v-col>
                  <v-col id="g-thirg" class="mid"><img src="../assets/hip.jpg" alt=""></v-col>
                </v-row>
                <v-row >
                 <v-col id="g-fo"><img src="../assets/danc.jpg" alt=""></v-col>
                 <v-col id="g-fif" class="mid"><img src="../assets/edm.jpg" alt=""></v-col>
                </v-row>
                <v-col id="g-sif"><img src="../assets/rock.jpg" alt=""></v-col>
                </v-row>
            </v-container>
              <div class="live">
             <div  class="recently a-title">LIve Radio</div>
              <div class="text-center" id="place">
               <v-carousel id="rty" hide-delimiters>
                   <v-carousel-item >
                    <span><img src="../assets/jen.jpg">
                    <div>Dream Your Moment</div>
                    <div class="s-name">Ava cornish</div>
                    </span>
                     <span><img src="../assets/lin.jpg">
                      <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                      <span><img src="../assets/lin2.jpg">
                       <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                       <span><img src="../assets/lin3.jpg">
                        <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                        <span><img src="../assets/lin4.jpg">
                         <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                         <span><img src="../assets/lin5.jpg">
                          <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                   </v-carousel-item>
                     <v-carousel-item >
                    <span><img src="../assets/lin6.jpg">
                     <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                     <span><img src="../assets/lin7.jpg">
                      <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                      <span><img src="../assets/dj.jpg">
                       <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                       <span><img src="../assets/jen.jpg">
                        <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                        <span><img src="../assets/lin.jpg">
                         <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                         <span><img src="../assets/jen.jpg">
                        <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                   </v-carousel-item>
                 </v-carousel>
                 </div>
                 <Footer/>
            </div>
    </div>
</div>
</template>
<style  scoped>
.home{
  font-family: "Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;
  /* line-height: 16px; */
}
.live{
  position: relative;
  bottom: 350px;
}
#t-gernes{
  position: relative;
  bottom:380px;
}
.top{
  color:#3BC8E6;
  font-size: 16px;
}
#grid{
  display:grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-gap: 10px;
}
#g-fist{
  grid-row: 1/4;
}
#g-fist img{
  width: 350px;
  height: 400px;
}
#g-sec img{
  height: 190px;
}
#g-thrig img{
  width: 400px;
  height: 190px;
}
#g-fo{
  position: relative;
  right:200px;
}
#g-fo img{
  width: 400px;
  height: 190px;
}
/* #g-thirg{

} */
#g-thirg img{
   width: 400px;
  height: 190px;
}
#g-fif{
  padding-left:30px;
}
#g-fif img{
  position: relative;
  right: 10px;
  height:190px;
}
#g-sif img{
  position: relative;
  right: 210px;
  height: 400px;
}
.mid{
  position: relative;
  bottom: 15px;
}
.album{
  position: relative;
  bottom: 230px;
}
.artist{
  position: relative;
  bottom: 130px;
}
.w-cont{
  width: 28%;
  padding-left:3px;
  margin:10px 0px 0px 60px;
  display: inline-flex;
}
.rightt{
  margin: 10px 0px 0px 15px;
}
.dura{
  padding:20px 0px 0px  100px;
}
.w-icon{
  padding: 15px 0px 0px 10px;
}
.leftt::before{
  counter-increment:cout;
  content: counter(cout, decimal-leading-zero);
  color:#777779;
  font-family: none;
  font-size: 40px;
}
.weekly img{
  margin:0px 0px 0px 20px;
  height: 50px;
  width: 50px;
}
.r-page{
  height: 500px;
}
.weekly{
   counter-reset: cout;
   position: relative;
   bottom:150px;
  width: 100%;
}
.w-title{
 color:#3BC8E6;
 padding:0px 0px 10px 110px;
  font-size: 16px;
}
.recently{
 color:#3BC8E6;
 padding:0px 0px 0px 110px;
  font-size: 16px;
}
.s-name{
  color: whitesmoke;
}
#place{
    position: relative;
    bottom: 100px;
}
#rty span{
    display: inline-block;
    color: white;
    text-align: left;
}
#rty div{
    margin-left: 13px;
}
#rty img{
    width: 190px;
    height: 190px;
    border-radius:5px;
    margin: 140px 0px 0px  7px;
}
#rty{
    position: relative;
    right:3px;
    margin-left: 50px;
    width: 1300px;
}
.fi-titl{
  padding:150px 0px 0px 0px;
  font-size: 50px;
  font-weight: bold;
}
.se-titl{
  color: #3BC8E6;
  font-size: 45px;
  font-weight: bold;
}
.th-cot{
  width: 77%;
  color: #777779;
  font-size: 14px;
}
.h-btn button{
   background:#3BC8E6;
  border-radius:25px;
  padding: 7px 25px 7px 25px;
  margin-left: 20px;
  margin-top: 15px;
  outline: none;
}
.left{
  float: left;
width: 40%;
}
.right{
  float: right;
  width: 55%;
}
.content{
  background: #15182B;
  background-size:100%;
  width: 100%;
  height: 3400px;
  color: white;
}
</style>
<script>
import Footer from '@/components/footer.vue'
import Header from '@/components/headero.vue'
export default {
  name: 'home',
  components: {
    Footer,
    Header
  },
  data () {
    return {
      song: [
        { img: '../assets/disco.jpg', album: 'Until I Met You', name: 'Ava Cornish', dura: '3:30' },
        { img: '../assets/disco.jpg', album: 'Until I Met You', name: 'Ava Cornish', dura: '3:30' },
        { img: '../assets/disco.jpg', album: 'Until I Met You', name: 'Ava Cornish', dura: '3:30' },
        { img: '../assets/disco.jpg', album: 'Until I Met You', name: 'Ava Cornish', dura: '3:30' },
        { img: '../assets/disco.jpg', album: 'Until I Met You', name: 'Ava Cornish', dura: '3:30' },
        { img: '../assets/disco.jpg', album: 'Until I Met You', name: 'Ava Cornish', dura: '3:30' },
        { img: '../assets/disco.jpg', album: 'Until I Met You', name: 'Ava Cornish', dura: '3:30' },
        { img: '../assets/disco.jpg', album: 'Until I Met You', name: 'Ava Cornish', dura: '3:30' },
        { img: '../assets/disco.jpg', album: 'Until I Met You', name: 'Ava Cornish', dura: '3:30' },
        { img: '../assets/disco.jpg', album: 'Until I Met You', name: 'Ava Cornish', dura: '3:30' },
        { img: '../assets/disco.jpg', album: 'Until I Met You', name: 'Ava Cornish', dura: '3:30' },
        { img: '../assets/disco.jpg', album: 'Until I Met You', name: 'Ava Cornish', dura: '3:30' },
        { img: '../assets/disco.jpg', album: 'Until I Met You', name: 'Ava Cornish', dura: '3:30' },
        { img: '../assets/disco.jpg', album: 'Until I Met You', name: 'Ava Cornish', dura: '3:30' },
        { img: '../assets/disco.jpg', album: 'Until I Met You', name: 'Ava Cornish', dura: '3:30' }]
    }
  }
}
</script>
