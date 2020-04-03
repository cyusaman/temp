<template>
  <v-app class="web">
    <div id="l-header">
   <v-navigation-drawer expand-on-hover permanent id="header-l" dark >
      <v-list dense nav>
       <v-list  v-for="navb in navbar" :key='navb.icon' height="45px">
               <v-list-item link router :to="navb.link">
                 <v-list-item-icon>
               <v-icon id="icon">{{navb.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{navb.title}}</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
       </v-list>

      </v-list>
    </v-navigation-drawer>
    </div>
<router-view/>
  </v-app>
</template>
<script>
export default {
  name: 'Web',
  data () {
    return {
      navbar: [
        { icon: 'home', title: 'Discover', link: '/' },
        { icon: 'album', title: 'Albums', link: '/upload' },
        { icon: 'mic_none', title: 'Artist', link: '/artist' },
        { icon: 'library_music', title: 'Genres', link: '/Genres' },
        { icon: 'control_camera', title: 'Top Track', link: '/upload' },
        { icon: 'music_video', title: 'Free Music', link: '/Free Music' },
        { icon: 'wb_incandescent', title: 'Stations', link: '/Stations' },
        { icon: 'save_alt', title: 'Downloads', link: '/Downloads' },
        { icon: 'shopping_cart', title: 'Purchased', link: '/Purchased' },
        { icon: 'favorite_border', title: 'Favorites', link: '/Favorites' },
        { icon: 'history', title: 'History', link: '/History' },
        { icon: 'queue_music', title: 'Featured Playlist', link: '/Featured' },
        { icon: 'playlist_add', title: 'Create Playlist', link: '/Create' }]
    }
  }
}
</script>
<style>
.ttitle{
  color:#3BC8E6;
  margin-left: 15px;
}
.llan{
  margin-left: 87px;
}
#icon{
  font-size: 18px;
}
.log{
background:  #3BC8E6;
outline: none;
border-radius: 50%;
width: 40px;
height: 40px;
color: white;
font-size: 25px;
}
#header-l{
  background:#1B1F38;
  margin-top: 50px;
}
#l-header{
   position: absolute;
   z-index: 999;
}
#a-btn button{
background:  #3BC8E6;
outline: none;
border-radius: 25px;
height: 26px;
font-size: 12px;
}
#reg{
  margin-left: 10px;
  width: 80px;
}
#login{
  width: 90px;
  margin-left: 15px;
}
.s-inp{
  margin:0px 40px 0px 30px;
}
.s-inp input{
  background: white;
  color: black;
  width: 270px;
  height: 27px;
  outline: none;
  border-radius: 3px 0px 0px 3px;
}
.web{
  font-size: 12px;
  font-weight: 400;
}
#header-top{
background: #1B1F38;
font-size: 13px;
font-weight: 100;
}
.s-btn{
  position: relative;
  bottom: 1px;
  background: #3BC8E6;
  outline: none;
  border: none;
  border-radius: 0px 3px 3px 0px;
  height:27px;
  width: 35px;
}
.ntub{
  font-size: 20px;
  font-weight: 0;
}
</style>
