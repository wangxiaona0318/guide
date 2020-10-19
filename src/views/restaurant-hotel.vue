<template>
    <div class="restaurant-cotent">
        <div class="tab">
            <div @click="tabChange(v, k)" :class="{active: index === k}" class="tab-item" v-for="(v, k) in tab" :key="k">{{v.name}}</div>
        </div>
        <div class="tab-body">
            <div class="wrap-img" @click="leftHandle" v-if="data.length" :class="{forbiden: pageNumber === 0}">
                <img src="../assets/arrows/left.png" alt="">
            </div>
            <div class="tab-detail">
                <router-link v-for="(v, k) in data" :key="k" class="rh-detail" :to="`/restaurant-hotel-detail?id=${v.id}`">
                    <img :src="v.cvoer_path" alt="">
                    <div class="name">{{v.name}}</div>
                    <div class="address">{{v.address}}</div>
                </router-link>
            </div>
            <div class="wrap-img right" v-if="data.length" @click="rightHandle" :class="{forbiden: pageNumber+1 === page}">
                <img src="../assets/arrows/right.png" alt="">
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
            page: Math.ceil(hotel.data.length/8),
            pageSize: 8,
            pageNumber: 0,
        }
    },
    mounted() {
        this.data = this.datas[this.index].data.slice(0, this.pageSize)
        console.log(this.index, this.page)
    },
    methods: {
        tabChange(v, k){
            this.index = k
            this.data = this.datas[this.index].data
        },
        rightHandle() {
            if(this.pageNumber + 1 === this.page) {
                return
            }
            this.pageNumber++
            this.data = this.datas[this.index].data.slice(this.pageSize*this.pageNumber, (this.pageNumber+1)*this.pageSize)
        },
        leftHandle() {
            if(this.pageNumber === 0) {
                return
            }
            this.pageNumber--
            this.data = this.datas[this.index].data.slice(this.pageNumber*this.pageSize, (this.pageNumber+1)*this.pageSize)
        }
    }
}
</script>
<style scoped lang="less">
.restaurant-cotent{
    height: 100%;
    display: flex;
    flex-direction: column;
}
    .tab-body{
        margin-top: 30px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        justify-content: center;
        flex: 1;
        
        .tab-detail{
            margin-top: -33px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: center;
        }
        .wrap-img{
            position: absolute;
            left: 24px;
            top: 50%;
            cursor: pointer;
            &.right{
                right: 24px;
                left: auto;
            }
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