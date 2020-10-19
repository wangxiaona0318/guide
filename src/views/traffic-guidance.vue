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
    width: 1089px;
    height: 666px;
    margin-right: 29px;
    display: flex;
    .trafficMap{
        width: 100%;
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
        border: 1px solid #CE292C;
        border-radius: 24px;
        img{
            max-width: 1089px;
            max-height: 666px;
        }
    }
}
.guide-storey .storey-content .storey-item{
    width: 200px;
    border-radius: 5px;
    margin: 0 10px;
}
.guide-storey{
    width: 100px;
    border-radius: 6px;
    box-shadow: none;
}
</style>