<template>
    <div class="mod-body">
        <div class="left-part">
            <div class="shop-name">览丰围巾</div>
            <div class="split-line "></div>
            <div class="base-info">
                <div class="column-item">
                    <div>
                        <div class="title-info margin-top-30">
                            <div class="title-icon">
                                <img src="" alt="">
                            </div>
                            <div class="title">经营户/seller:</div>
                        </div>
                        <div class="detail-info margin-top-6">{{data.seller}}</div>
                    </div>
                    <div>
                        <div class="title-info margin-top-30">
                            <div class="title-icon">
                                <img src="" alt="">
                            </div>
                            <div class="title">联系电话/Telephone:</div>
                        </div>
                        <div class="detail-info margin-top-6">{{data.telephone}}</div>
                    </div>
                    <div>
                        <div class="title-info margin-top-30">
                            <div class="title-icon">
                                <img src="" alt="">
                            </div>
                            <div class="title">主营/Main business:</div>
                        </div>
                        <div class="detail-info margin-top-6">{{data.main_bussiness}}</div>
                    </div>
                </div>
                <div class="column-item">
                    <div>
                        <div class="title-info margin-top-30">
                            <div class="title-icon">
                                <img src="" alt="">
                            </div>
                            <div class="title">店主微信/Wechat:</div>
                        </div>
                        <div class="detail-info margin-top-6">
                            <img :src="data.wechat_qrcode_path" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right-part">
            <div class="img-item">
                <img data-v-3af36e76="" src="http://47.110.135.173/maofancity/admin/public/uploads/images/photos/2020/0911/user_1_1599831305_6ryLZrYT5w.jpg">
            </div>
            <div class="img-item">
                <img data-v-3af36e76="" src="http://47.110.135.173/maofancity/admin/public/uploads/images/photos/2020/0911/user_1_1599831305_6ryLZrYT5w.jpg">
            </div>
            <div class="img-item">
                <img data-v-3af36e76="" src="http://47.110.135.173/maofancity/admin/public/uploads/images/photos/2020/0911/user_1_1599831305_6ryLZrYT5w.jpg">
            </div>
            <div class="img-item">
                <img data-v-3af36e76="" src="http://47.110.135.173/maofancity/admin/public/uploads/images/photos/2020/0911/user_1_1599831305_6ryLZrYT5w.jpg">
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
            data: {}
        }
    },
    mounted() {
        let floor = this.$route.query.floor
        let shop = this.$route.query.shop
        let data = floorData[floor].data
        this.data = floorData[floor].data.filter(v=>v.id==shop)[0]
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
</style>