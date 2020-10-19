<template>
    <div class="tab-body">
        <div class="tab-detail">
            <router-link v-for="(v, k) in data" :key="k" class="rh-detail" :to="`/tourist-attraction-detail?id=${v.id}`">
                <img :src="v.cvoer_path">
                <div class="name">{{v.name}}</div>
                <div class="address">{{v.address}}</div>
            </router-link>
        </div>
    </div>
</template>
<script>
import data from '../api/tourist-attraction.js'
export default {
    name: 'touristAttraction',
    data() {
        return {
            data: data.data,
        }
    },
    mounted() {
        console.log(this.data)
    }
}
</script>
<style lang="less" scoped>
.tab-detail{
    margin: -33px 0 -31px 0;
    padding: 15px;
    width: 1360px;
    height: 630px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    .rh-detail{
        margin: 31px 33px 0 0;
        width: 266px;
        height: 322px;
        background: #FFFFFF;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.16);
        border-radius: 6px;
        padding: 18px 12px;
        box-sizing: border-box;
        img{
            width: 242px;
            height: 210px;
        }
        .name{
            color: black;
            margin-top: 12px;
            font-size: 22px;
            white-space: nowrap;
            text-decoration: none;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 30px;
        }
        .address{
            margin-top: 7px;
            font-size: 18px;
            color: #9B9B9B;
            white-space: nowrap;
            text-decoration: none;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 25px;
        }
    }
}
</style>