<template>
    <div class="mod-body">
        <div class="left-part">
            <div class="shop-name">{{name}}</div>
            <div class="split-line "></div>
            <div class="base-info">
                <div class="column-item">
                    <div>
                        <div class="title-info margin-top-30">
                            <div class="title-icon">
                                <img src="../assets/shopping-guide-detail/icon.png" class="icon">
                            </div>
                            <div class="title">店主微信/Wechat:</div>
                        </div>
                        <div class="detail-info margin-top-6">
                            <img :src="weXinImg" class="wexin" v-if="weXinImg">
                            <span v-else>信息更新中</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right-part">
            <div class="img-item">
                <img :src="img1" v-if="img1">
            </div>
            <div class="img-item">
                <img :src="img2" v-if="img2">
            </div>
            <div class="img-item">
                <img :src="img3" v-if="img3">
            </div>
            <div class="img-item">
                <img :src="img4" v-if="img4">
            </div>
        </div>
    </div>
</template>
<script>
import floorData from '../api/shop.js'
export default {
    name: 'shoppingGuideDetail',
    data() {
        return {
            weXinImg: '',
            img1: '',
            img2: '',
            img3: '',
            img4: '',
            name: '',
        }
    },
    mounted() {
        let floor = this.$route.query.floor
        let shop = this.$route.query.shop
        let data = floorData[floor].data
        this.name = floorData[floor].data.filter(v=>v.numbers==shop)[0].name
        try{
            this.weXinImg = require(`../assets/shopping-guide-detail/${shop}/weixin.png`)
        }catch{
            this.weXinImg = ''
        }
        try{
            this.img1 = require(`../assets/shopping-guide-detail/${shop}/pic1.png`)
        }catch{
            this.img1 = ''
        }
        try{
            this.img2 = require(`../assets/shopping-guide-detail/${shop}/pic2.png`)
        }catch{
            this.img2 = ''
        }
        try{
            this.img3 = require(`../assets/shopping-guide-detail/${shop}/pic3.png`)
        }catch{
            this.img3 = ''
        }
        try{
            this.img4 = require(`../assets/shopping-guide-detail/${shop}/pic4.png`)
        }catch{
            this.img4 = ''
        }
    }
}
</script>
<style lang="less" scoped>
.mod-body{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    width: 1680px;
    height: 726px;
    border-radius: 10px;
    padding: 40px;
    .left-part{
        width: 840px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        .shop-name{
            font-size: 50px;
            font-weight: bold;
        }
        .split-line {
            border-top: 1px solid #CCCCCC;
            margin-top: 30px;
            margin-bottom: 15px;
        }
        .margin-top-30{
            margin-top: 30px;
        }
        .base-info{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            .column-item{
                width: 50%;
            }
        }
        .title-info{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            .title-icon{
                margin-right: 10px;
            }
        }
        .title{
            font-size: 32px;
            color: #666666;
        }
        .detail-info{
            margin-top: 20px;
            font-size: 32px;
            margin-left: 47px;
        }
    }
    .right-part{
        width: 840px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding: 18px;
        .img-item{
            margin: 5px;
            img{
                width: 372px;
                height: 303px;
                border-radius: 10px;
            }
        }
    }
}
.wexin{
    width: 310px;
    max-width: 420px;
}
.icon{
    width: 37px;
    height: 37px;
}
</style>