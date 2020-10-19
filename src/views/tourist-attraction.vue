<template>
    <div class="tab-body">
        <div class="wrap-img" @click="leftHandle" v-if="data.length" :class="{forbiden: index === 0}">
            <img src="../assets/arrows/left.png" alt="">
        </div>
        <div class="tab-detail">
            <router-link v-for="(v, k) in data" :key="k" class="rh-detail" :to="`/tourist-attraction-detail?id=${v.id}`">
                <img :src="v.cvoer_path">
                <div class="name">{{v.name}}</div>
                <div class="address">{{v.address}}</div>
            </router-link>
        </div>
        <div class="wrap-img right" v-if="data.length" @click="rightHandle" :class="{forbiden: index+1 === page}">
            <img src="../assets/arrows/right.png" alt="">
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
            index: 0,
            page: Math.ceil(data.data.length/8),
            pageSize: 8,
        }
    },
    mounted() {
        this.data = this.data.slice(0, this.pageSize)
        console.log(this.index, this.page)
    },
    methods: {
        rightHandle() {
            if(this.index + 1 === this.page) {
                return
            }
            this.index++
            this.data = data.data.slice(this.pageSize*this.index, (this.index+1)*this.pageSize)
        },
        leftHandle() {
            if(this.index === 0) {
                return
            }
            this.index--
            this.data = data.data.slice((this.index)*this.pageSize, (this.index+1)*this.pageSize)
        }
    }
}
</script>
<style lang="less" scoped>
.tab-body{
    display: flex;
    position: relative;
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
.tab-detail{
    margin: -31px 0 0 -33px;
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
    justify-content: center;
    .rh-detail{
        margin: 31px 0 0 33px;
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