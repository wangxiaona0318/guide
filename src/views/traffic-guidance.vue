<template>
    <div class="content">
        <div class="trafficMap">
            <img data-v-4d06f2ee="" :src="url">
        </div>
        <div class="guide-storey">
            <div class="storey-content">
                <div
                    @click="imgHandler(k)"
                    class="storey-item"
                    :class="{active: index === k}"
                    v-for="(v, k) in data"
                    :key='k'>{{v.name}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import data from '../api/traffic-guidance.js'
export default {
    name: 'trafficGuidance',
    data() {
        return {
            data: data.data,
            index: 0,
            url: '',
        }
    },
    mounted() {
        this.imgHandler(0)
    },
    methods: {
        imgHandler(k) {
            this.index = k
            try{
                this.url = require('../assets/traffic-guidance/'+k+'.jpg')
            }catch {
                this.url = ''
            }
        }
    }
}
</script>
<style lang="less" scoped>
.content{
    border-radius: 10px;
    height: 666px;
    display: flex;
    border: 1px solid #CE292C;
    border-radius: 24px;
    position: relative;
    .trafficMap{
        width: calc(100% - 175px);
        height: 100%;
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
        // border: 1px solid #CE292C;
        // border-radius: 24px;
        img{
            max-width: 1089px;
            max-height: 666px;
            border-radius: 24px;
        }
    }
}
.guide-storey .storey-content .storey-item{
    border-radius: 5px;
    margin: 0 10px;
    background: #fff;
    border: 1px solid #fff;
    &.active{
        background: #CE292C;
    }
}
.guide-storey{
    margin-left: 30px;
    padding-left: 15px;
    width: 145px;
    border-radius: 0;
    box-shadow: none;
    position: absolute;
    top: 0;
    right: 15px;
    padding: 0;
    height: 100%;
    border-left: 1px solid #CE292C;
}
.guide-storey .storey-content{
    margin-left: 10px;
    .storey-item{
        line-height: 34px;
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
            background: #CE292C;
            color: #fff;
        }
    }
}

</style>