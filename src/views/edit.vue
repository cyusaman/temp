<template>
    <div class="editt">
        <Header/>
        <div class="mainn">
            <div class="dt"><span>Edit Profile</span></div>
         <div class="box">
             <div class="pic">
               <div><v-icon id="addimg" dark></v-icon></div>
               <div class="b-img"></div>
                 <img src="../assets/jen.jpg" alt="">
             </div>
      <div class="syst">
   <div class="b-left disp">
  <div  class="tti">Your Name *</div>
  <input type="text" placeholder=" Bella Scott">
  <div  class="tti">Your Password *</div>
  <input type="password" placeholder=" ">
 <div><span><button>Save</button></span></div>
</div>
<div class="b-right disp">
  <div class="tti">Email *</div>
  <input type="text" placeholder=" Bella@gmail.com">
  <div  class="tti">Confirm password *</div>
  <input type="password"  placeholder="">
   <div><button>Cancel</button></div>
  </div>
      </div>
    </div>
    </div>
       <Footer/>
    </div>
</template>
<style scoped>
.mainn{
    height:620px;
    background: #15182B;
    padding-top: 60px;
}
.box{
  background: #1B1F38;
  width: 700px;
  height:400px;
  border-radius: 25px;
  margin:10px 0px 0px 350px;
}
.dt{
    text-align: center;
    color: white;
    padding-top: 20px;
}
.dt span{
    font-size: 20px;
}
.pic{
    text-align: center;
    padding-top:15px;
}
.b-img{
  background: white;
  width: 100px;
  height: 101px;
  border-radius:50%;
  position: absolute;
  opacity: 0.2;
  margin-left: 300px;
}
.pic img{
    width: 100px;
    height: 101px;
    border: white 2px solid;
    border-radius:50%;
}
.mainn input{
  background: white;
  color: black;
  width: 280px;
  border-radius:3px;
  outline: none;
  height: 35px;
}
.mainn button{
  background:#3BC8E6;
  border-radius:25px;
  padding: 7px 30px 7px 30px;
  margin-top: 15px;
  outline: none;
  color: white;
}
.syst{
  padding-top: 10px;
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
.tti{
  color:#3BC8E6;
  margin: 20px 0px 3px 0px;
}
#addimg{
  position: absolute;
  opacity: 1;
  margin:40px 0px 0px 0px;
}
</style>

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
