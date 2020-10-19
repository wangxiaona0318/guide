<template>
  <div class="home">
    <div class="mod-home">
      <headers></headers>
      <div class="body">
        <div class="mod-body">
          <left v-if="!$route.meta.noLeft"></left>
          <div class="content-body">
             <router-view/>
          </div>
        </div>
      </div>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import headers from '../components/header.vue'
import left from '../components/left.vue'

// @ is an alias to /src

export default {
  name: 'Index',
  components: {
    headers,
    left
  }
}
</script>
<style scoped>
.mod-home{
    height: 1080px;
    width: 1920px;
    /* background-size: cover;
    background-size: 100% 100%; */
    background-image: url(../assets/home_bg.png);
    background-repeat: no-repeat;
    padding: 30px 120px 100px 120px;
    box-sizing: border-box;
}
.body{
  margin-top: 51px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}
.mod-body{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
    width: 100%;
}
.content-body{
    width: 1388px;
    height: 726px;
    /* background: #fff; */
    border-radius: 10px;
    flex: 1;
    /* padding: 0 30px; */
    /* width: 1082px;
    height: 677px;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.16);
    border-radius: 24px;
    border: 1px solid #CE292C; */
}
</style>
