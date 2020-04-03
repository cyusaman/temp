<template>
  <div class="upload" dark>
    <Header/>
    <div class="u-top">
      <div class="u-title">Upload & Share Your Music With The World</div>
      <div><v-icon id="u-icon" dark>backup</v-icon></div>
      <div class="btn">
        <button>Select Files</button>
        <div class="or"> <span>O</span>r</div>
        <div>Drag And Drop Music Files</div>
      </div>
    </div>
    <div class="u-btom">
      <div class="b-title"> <span>Track Information</span></div>
      <div class="syst">
   <div class="b-left disp">
  <div  class="tti">Track Name *</div>
  <input type="text" placeholder=" Dream Your Moments">
  <div  class="tti">Select Album</div>
  <input type="text" placeholder=" Cloud Nine">
 <div><span><button>Pload Now</button></span></div>
</div>
<div class="b-right disp">
  <div class="tti">Artist's Name *</div>
  <input type="text" placeholder=" Ava Cornish, Brian Hill">
  <div  class="tti">Select Privacy</div>
  <input type="text" placeholder=" Public">
   <div><button>Cancel</button></div>
  </div>
      </div>
    </div>
    <div class="hhh">
   <Footer/>
    </div>
  </div>
</template>
<script>
import Footer from '@/components/footer.vue'
import Header from '@/components/headeru.vue'
export default {
  name: 'upload',
  components: {
    Footer,
    Header
  }
}
</script>
<style scoped>
.u-btom{
   background: #1B1F38;
  width: 700px;
  height:350px;
  border-radius: 25px;
  margin:50px 0px 0px 350px;
}
.b-title{
  color:#3BC8E6;
  padding-top:25px;
  text-align: center;
}
.tti{
  color:#3BC8E6;
  margin: 20px 0px 3px 0px;
}
.u-btom input{
  background: white;
  color: black;
  width: 280px;
  border-radius:3px;
  outline: none;
  height: 35px;
}
.u-btom button{
  background:#3BC8E6;
  border-radius:25px;
  padding: 7px 30px 7px 30px;
  margin-top: 15px;
  outline: none;
}
.syst{
  padding-top: 25px;
}
.disp{
  display: inline-block;
}
.b-right{
  margin-left: 30px;
}
.b-left{
  margin-left: 60px;
}
.b-left button{
  margin-left: 160px;
}
.upload{
  background: #15182B;
  background-size:100%;
  width: 10000px;
  height: 1000px;
  color: white;
}
.u-top{
  background: #1B1F38;
  width: 700px;
  height:350px;
  border-radius: 25px;
  margin:50px 0px 0px 350px;
}
.u-title{
  margin:20px;
  color: white;
  font-size:20px;
  padding:20px 0px 0px 150px;
}
#u-icon{
  font-size: 100px;
  padding-left:280px;
}
.btn{
  padding:20px 0px 0px 270px;

}
.btn button{
 background:#3BC8E6;
 border: none;
 outline: none;
 border-radius: 30px;
 width: 130px;
 height: 30px;
}
.or{
  padding:10px 0px 5px 50px;
}
.hhh{
  margin-top: 20px;
}
</style>
