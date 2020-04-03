<template>
    <div class="favo">
        <Header/>
        <div class="content">
            <div class="favt tit">Your favorates</div>
            <div class="titl" id="heig">
                <span class="start"><v-icon color="#3BC8E6">starts</v-icon></span>
                <span class="ttit  tit">Song Title</span>
                  <span class="album  tit">Album</span>
                   <span class="price  tit">Price</span>
                   <span class="dura  tit">Duration</span>
                    <span class="more tit">More</span>
                  <span class="remove tit">Remove</span>
            </div>
            <div class="line"></div>
                <div class="titl"  v-for='favorat in favorate' :key='favorat.song'>
                <span class="start"><v-icon color="#3BC8E6">play_circle_outline</v-icon></span>
                <span class="ttit">{{favorat.song}}</span>
                  <span class="album">{{favorat.album}}</span>
                   <span class="price  tit">{{favorat.price}}</span>
                   <span class="dura">{{favorat.duration}}</span>
                    <span class="more"><v-icon color="#3BC8E6">more_horiz</v-icon></span>
                  <span class="remove alig"><button><v-icon color="#3BC8E6" id="canc">cancel</v-icon></button></span>
            </div>
            <div class="view"><button class="than">View More</button></div>
            <div>
                <div  class="favt tit">Recently Played</div>
              <div class="text-center" id="place">
               <v-carousel id="rty" hide-delimiters>
                   <v-carousel-item >
                    <span><img src="../assets/jen.jpg">
                    <div>Dream Your Moment</div>
                    <div>Ava cornish</div>
                    </span>
                     <span><img src="../assets/jen.jpg">
                      <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                      <span><img src="../assets/jen.jpg">
                       <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                       <span><img src="../assets/jen.jpg">
                        <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                        <span><img src="../assets/jen.jpg">
                         <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                         <span><img src="../assets/jen.jpg">
                          <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                   </v-carousel-item>
                     <v-carousel-item >
                    <span><img src="../assets/jen.jpg">
                     <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                     <span><img src="../assets/jen.jpg">
                      <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                      <span><img src="../assets/jen.jpg">
                       <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                       <span><img src="../assets/jen.jpg">
                        <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                        <span><img src="../assets/jen.jpg">
                         <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                         <span><img src="../assets/jen.jpg">
                        <div>Dream Your Moment</div>
                    <div>Ava cornish</div></span>
                   </v-carousel-item>
                 </v-carousel>
                 </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<style scoped>
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
    position: absolute;
    right:3px;
    margin-left: 50px;
    width: 1300px;
}
.view{
    text-align: center;
}
.than{
 background:#3BC8E6;
  border-radius:25px;
  padding: 7px 25px 7px 25px;
  margin-top: 23px;
  outline: none;
}
.tit{
    color:#3BC8E6;
}
.favt{
    padding:20px 0px 0px 110px;
    font-size: 16px;
}
.start{
    width: 100px;
}
.ttit{
    width: 260px;
}
.album{
    width: 260px;
}
.price{
    width: 150px;
}
.dura{
    width: 150px;
}
.more{
    width: 100px;
}
.remove{
    width: 100px;
}
.alig{
    padding-left:15px;
}
#canc{
    background: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
}
button{
    outline: none;
}
.content{
  background: #15182B;
  height: 1000px;
  background-size:100%;

  color: white;
}
.titl{
    margin:15px 0px 0px 150px;
    display: inline-flex;
    font-size: 15px;
}
#hieg {
    margin-top: 30px;
}
.line{
    width: 1100px;
    height:2px;
    background:#3BC8E6;
    margin:15px 0px 0px 120px;
}
</style>
<script>
import Footer from '@/components/footer.vue'
import Header from '@/components/headeru.vue'
export default {
  name: 'favo',
  components: {
    Footer,
    Header
  },
  data () {
    return {
      page: 3,
      favorate: [
        { song: 'Bloodlust', album: 'Dream You Moment', price: '5$', duration: '4:30' },
        { song: 'Bloodlust', album: 'Dream You Moment', price: '5$', duration: '4:30' },
        { song: 'Bloodlust', album: 'Dream You Moment', price: '5$', duration: '4:30' },
        { song: 'Bloodlust', album: 'Dream You Moment', price: '5$', duration: '4:30' },
        { song: 'Bloodlust', album: 'Dream You Moment', price: '5$', duration: '4:30' },
        { song: 'Bloodlust', album: 'Dream You Moment', price: '5$', duration: '4:30' },
        { song: 'Bloodlust', album: 'Dream You Moment', price: '5$', duration: '4:30' },
        { song: 'Bloodlust', album: 'Dream You Moment', price: '5$', duration: '4:30' },
        { song: 'Bloodlust', album: 'Dream You Moment', price: '5$', duration: '4:30' },
        { song: 'Bloodlust', album: 'Dream You Moment', price: '5$', duration: '4:30' },
        { song: 'Bloodlust', album: 'Dream You Moment', price: '5$', duration: '4:30' },
        { song: 'Bloodlust', album: 'Dream You Moment', price: '5$', duration: '4:30' },
        { song: 'Bloodlust', album: 'Dream You Moment', price: '5$', duration: '4:30' }]
    }
  }

}
</script>
