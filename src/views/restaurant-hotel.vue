<template>
    <div>
        <div class="tab">
            <div @click="tabChange(v, k)" :class="{active: index === k}" class="tab-item" v-for="(v, k) in tab" :key="k">{{v.name}}</div>
        </div>
        <div class="tab-body">
            <div class="tab-detail">
                <router-link v-for="(v, k) in data" :key="k" class="rh-detail" :to="`/restaurant-hotel-detail?id=${v.id}`">
                    <img :src="v.cvoer_path" alt="">
                    <div class="name">{{v.name}}</div>
                    <div class="address">{{v.address}}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import hotel from '../api/restaurant-hotel.js'
import rest from '../api/restaurant-hotel-rest.js'
export default {
    name: 'restaurantHotel',
    data() {
        return {
            tab: [
                { name: '餐饮' },
                { name: '住宿' },
            ],
            index: 0,
            datas: [hotel, rest],
            data: [],
        }
    },
    mounted() {
        this.data = this.datas[this.index].data
    },
    methods: {
        tabChange(v, k){
            this.index = k
            this.data = this.datas[this.index].data
        },
    }
}
</script>
<style scoped lang="less">
    .tab-body{
        margin-top: 30px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .tab-detail{
            margin-top: -33px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
        }
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