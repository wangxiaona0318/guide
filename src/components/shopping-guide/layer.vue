<template>
    <div class="guide-body">
        <div class="guide-picture-content">
            <div class="guide-picture">
                <div>
                    <img :src="url" class="img">
                </div>
            </div>
        </div>
        <div class="guide-storey">
            <div class="storey-content">
                <div
                    @click="imgHandler(k)"
                    class="storey-item"
                    :class="{active: floor === k}"
                    v-for="(v, k) in data"
                    :key='k'>{{v+1+'F'}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'layer',
    data() {
        return {
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            floor: 0,
            url: require('../../assets/layer/floor0.jpg')
        }
    },
    methods: {
        imgHandler(k) {
            this.floor = k
            try{
                this.url = require('../../assets/layer/floor'+k+'.jpg')
            } catch {
                this.url = ''
            }
        }
    }
}
</script>
<style scoped lang="less">
.guide-body{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
}
.guide-picture-content{
    padding-bottom: 30px;
    padding-right: 15px;
    width: 1238px;
    height: 619px;
    box-sizing: border-box;
    .guide-picture{
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
        margin-top: 30px;
        position: relative;
        >div{
            height: 100%;
            display: inline-block;
            position: relative;
            .img{
                max-width: 100%;
                max-height: 100%;
            }
        }
    }
}
.guide-storey{
    margin-top: 20px;
}
</style>