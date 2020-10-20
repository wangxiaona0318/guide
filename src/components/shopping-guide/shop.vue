<template>
    <div class="guide-body">
        <div class="guide-content">
            <div class="wrap-img" @click="leftHandle" v-if="data.length" :class="{forbiden: index === 0}">
                <img src="../../assets/arrows/left.png" alt="">
            </div>
            <div class="wrap">
                <!--  :to="`/shopping-guide-detail?floor=${index}&shop=${v.id}`" -->
                <router-link v-for="(v, k) in data" :key="k" to="">
                    <div class="guide-item">
                        <div class="name">{{v.name}}</div>
                        <div class="numbers">{{v.numbers}}</div>
                    </div>
                </router-link>
            </div>
            <div class="wrap-img right" v-if="data.length" @click="rightHandle" :class="{forbiden: index+1 == page}">
                <img src="../../assets/arrows/right.png" alt="">
            </div>
            <!-- <el-pagination
                layout="prev, pager, next"
                :page-size="36"
                :total="50">
            </el-pagination> -->
        </div>
        <div class="guide-storey">
            <div class="storey-content">
                <div
                    @click="changeFloor(k)"
                    class="storey-item"
                    :class="{active: floorIndex === k}"
                    v-for="(v, k) in floor"
                    :key='k'>{{v+1+'F'}}</div>
            </div>
        </div>
        
    </div>
</template>
<script>
import floorData from '../../api/shop.js'
export default {
    name: 'shop',
    data() {
        return {
            data: floorData[0].data,
            floor: [0, 1, 2, 3, 4],
            floorIndex: 0,
            index: 0,
            page: Math.ceil(floorData[0].data.length/30)
        }
    },
    mounted() {
        this.data = this.data.slice(0, 30)
    },
    methods: {
        changeFloor(k) {
            this.index = 0
            this.floorIndex = k
            let data = floorData[k] && floorData[k].data ? floorData[k].data : []
            this.data = data.slice(0, 30)
            this.page = Math.ceil(data.length/30)
        },
        rightHandle() {
            if(this.index + 1 === this.page) {
                return
            }
            this.index++
            let data = floorData[this.floorIndex] && floorData[this.floorIndex].data ? floorData[this.floorIndex].data : []
            this.data = data.slice(30*this.index, (this.index+1)*30)
        },
        leftHandle() {
            if(this.index === 0) {
                return
            }
            this.index--
            let data = floorData[this.floorIndex] && floorData[this.floorIndex].data ? floorData[this.floorIndex].data : []
            this.data = data.slice((this.index)*30, (this.index+1)*30)
        }
    }
}
</script>
<style scoped lang="less">
.guide-body{
    margin-top: 22px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 10px 0;
    box-sizing: border-box;
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
.wrap{
    width: 880px;
    display: flex;
    flex-wrap: wrap;
}
.guide-content{
    margin: -32px 0 0 -9px;
    width: 1238px;
    height: 600px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    align-items: center;
    justify-content: center;
    position: relative;
    .guide-item{
        padding-top: 13px;
        width: 164px;
        height: 68px;
        background: #FDF3F3;
        border-radius: 34px;
        border: 1px solid #FDF3F3;
        box-sizing: border-box;
        text-align: center;
        margin: 32px 0 0 9px;
        .name{
            height: 28px;
            font-size: 20px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #4A4A4A;
            line-height: 28px;
        }
        .numbers{
            height: 22px;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #9B9B9B;
            line-height: 22px;
        }
    }
}

</style>