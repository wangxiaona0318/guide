<template>
    <div class="rh-detail-body">
        <div class="name">{{data.name}}</div>
        <div class="split-line"></div>
        <div class="address">{{data.address}}</div>
        <div class="rh-picture">
            <div class="picture" v-for="(v, k) in data.photos_path" :key="k"><img data-v-0836d46e="" :src="v"></div>
        </div>
    </div>
</template>
<script>
import data from '../api/restaurant-hotel-detail.js'
export default {
    name: 'restaurant-hotel-detail',
    data() {
        return {
            data: {}
        }
    },
    mounted() {
        let id = this.$route.query.id
        this.data = data[id]
    }
}
</script>
<style lang="less" scoped>
.rh-detail-body{
    width: 1388px;
    height: 726px;
    background-color: white;
    border-radius: 10px;
    padding: 40px 60px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    .name{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 67px;
        font-size: 50px;
        font-weight: 900;
    }
    .split-line{
        border-bottom: 2px dashed #707070;
        margin-top: 23px;
        margin-bottom: 43px;
    }
    .address{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: #333333;
        font-size: 34px;
    }
    .rh-picture{
        margin-top: 45px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        .picture{
            width: 400px;
            height: 350px;
            &:not(:last-child){
                margin-right: 28px;
            }
            img{
                border-radius: 10px;
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>