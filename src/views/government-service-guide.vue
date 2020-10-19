<template>
    <div class="government-body">
        <router-link class="return" to="/government-service">
        <img src="../assets/return.png" class="return-img">
        返回</router-link>
        <div class="list">
            <router-link :to="`/government-service-guide-detail?type=${v.id}`" class="item" v-for="(v, k) in data" :key="k">{{v.name}}</router-link>
        </div>
    </div>
</template>
<script>
import data from '../api/government-service-guide.js'
export default {
    name: 'governmentServiceGuide',
    data() {
        return {
            data: data,
        }
    }
}
</script>
<style lang="less" scoped>
.government-body{
    padding: 0 30px;
}
.list{
    margin: 0 0 0 -20px;
    display: flex;
    flex-wrap: wrap;
}
.item{
    margin: 20px 0 0 20px;
    width: 236px;
    height: 88px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    background: #E17F80;
    border-radius: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>