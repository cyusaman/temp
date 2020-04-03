<template>
<div>
  <div class="he">
   <Header/>
  </div>
  <div class="app">
<div class="main">
  <div class="o-play">Your Playlists</div>
  <div class="add">
    <div> <img src="../assets/lin.jpg" alt="">
      <div class="mane">MY Favorates</div>
    </div>
    <div>
     <span><img src="../assets/lin.jpg" alt=""></span>
      <div class="mane">MY Favorates</div>
    </div>
       <div>
     <span class="b-add" ><v-btn icon dark><v-icon dark link>playlist_add</v-icon></v-btn></span>
    </div>
    </div>
  <v-carousel id="list" dark hide-delimiters>
    <div class="part">
      <div class="titlle">Featured playlist</div>
          <v-carousel-item >
            <div class="ppp">
              <span>
            <img src="../assets/lin.jpg" alt="">
           <div>Dream Your Moment</div>
           <div>Ava cornish</div>
              </span>
      <span>
       <img src="../assets/lin.jpg" alt="">
                            <div>Dream Your Moment</div>
                    <div>Ava cornish</div>
      </span>
            <span>
        <img src="../assets/lin.jpg" alt="">
                <div>Dream Your Moment</div>
                    <div>Ava cornish</div>
      </span>
      <span>
       <img src="../assets/lin.jpg" alt="">
               <div>Dream Your Moment</div>
                    <div>Ava cornish</div>
      </span>
            <span>
        <img src="../assets/lin.jpg" alt="">
                <div>Dream Your Moment</div>
                    <div>Ava cornish</div>
      </span>
      <span>
       <img src="../assets/lin.jpg" alt="">
               <div>Dream Your Moment</div>
                    <div>Ava cornish</div>
      </span>
            </div>

    </v-carousel-item>
    </div>
        <div class="part">
          <v-carousel-item >
                        <div class="ppp">
              <span>
            <img src="../assets/lin.jpg" alt="">
           <div>Dream Your Moment</div>
           <div>Ava cornish</div>
              </span>
      <span>
       <img src="../assets/lin.jpg" alt="">
                            <div>Dream Your Moment</div>
                    <div>Ava cornish</div>
      </span>
            <span>
        <img src="../assets/lin.jpg" alt="">
                <div>Dream Your Moment</div>
                    <div>Ava cornish</div>
      </span>
      <span>
       <img src="../assets/lin.jpg" alt="">
               <div>Dream Your Moment</div>
                    <div>Ava cornish</div>
      </span>
            <span>
        <img src="../assets/lin.jpg" alt="">
                <div>Dream Your Moment</div>
                    <div>Ava cornish</div>
      </span>
      <span>
       <img src="../assets/lin.jpg" alt="">
               <div>Dream Your Moment</div>
                    <div>Ava cornish</div>
      </span>
            </div>
    </v-carousel-item>
    </div>

  </v-carousel>
</div>
</div>
 <Footer/>
</div>
</template>
<script>
import Footer from '@/components/footer.vue'
import Header from '@/components/headeru.vue'
export default {
  components: {
    Footer,
    Header
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.ppp{
  display: flex;
}
.ppp div{
  padding-left: 10px;
}
.add{
  position: relative;
  bottom: 80px;
  padding-left: 40px;
  display: flex;
}
.mane {
  padding-left: 15px;
}
#list{
  position: relative;
  bottom: 160px;
}
.titlle{
  position: relative;
  top: 120px;
  left: 10px;
  font-size: 15px;
  color: #3BC8E6;
}
.main img{
    width: 190px;
    height: 190px;
    border-radius:5px;
    margin: 140px 0px 0px  7px;
}
.b-add{
  background: #1B1F38;
  position: relative;
  top: 220px;
  left: 10px;
  padding:90px 80px;
   border-radius:5px;
}
.part{
  margin-left: 40px;
}
.main{
  margin-left: 70px;
}
.o-play{
  position: relative;
  left: 40px;
  top:50px;
    font-size: 15px;
  color: #3BC8E6;
}
.app{
   background: #15182B;
   color: white;
}
</style>
