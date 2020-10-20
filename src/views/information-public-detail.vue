<template>
    <div class="information">
        <pre v-html="content" class="text-content"></pre>
        <!-- 质量 -->
        <div v-if="is=='quality'&&id=='120'">
            <img src="../assets/information-public/quality/11.png">
            <img src="../assets/information-public/quality/12.png">
            <img src="../assets/information-public/quality/13.png">
            <img src="../assets/information-public/quality/14.png">
        </div>
        <div v-if="is=='quality'&&id=='121'">
            <img src="../assets/information-public/quality/21.png">
            <img src="../assets/information-public/quality/22.png">
            <img src="../assets/information-public/quality/23.png">
            <img src="../assets/information-public/quality/24.png">
        </div>
        <!-- 经营户奖惩 -->
        <div v-if="is=='wards'&&id=='131'">
            <img src="../assets/information-public/wards/WechatIMG2895.jpeg">
        </div>
        <!-- 产品价格 -->
        <div>
            <div v-if="is=='price'&&id=='140'">
                <iframe src="http://puyuan.ctei.cn/jgzs/" class="iframe-information"/>
            </div>
            <div v-if="is=='price'&&id=='141'">
                <img src="../assets/information-public/price/141.jpg">
            </div>
            <div v-if="is=='price'&&id=='142'">
                <img src="../assets/information-public/price/142.jpg">
            </div>
            <div v-if="is=='price'&&id=='143'">
                <img src="../assets/information-public/price/143.jpg">
            </div>
            <div v-if="is=='price'&&id=='144'">
                <img src="../assets/information-public/price/144.jpg">
            </div>
            <div v-if="is=='price'&&id=='145'">
                <img src="../assets/information-public/price/145.jpg">
            </div>
            <div v-if="is=='price'&&id=='146'">
                <img src="../assets/information-public/price/146.jpg">
            </div>
            <div v-if="is=='price'&&id=='147'">
                <img src="../assets/information-public/price/147.jpg">
            </div>
            <div v-if="is=='price'&&id=='148'">
                <img src="../assets/information-public/price/148.jpg">
            </div>
            <div v-if="is=='price'&&id=='149'">
                <img src="../assets/information-public/price/149.jpg">
            </div>
            <div v-if="is=='price'&&id=='150'">
                <img src="../assets/information-public/price/150.jpg">
            </div>
        </div>
        <!-- 消费投诉处理 -->
        <div v-if="is=='complaint'">
            <div v-if="id=='150'">
                <img src="../assets/information-public/complaint/150.png">
            </div>
        </div>
    </div>
</template>
<script>
import system from '../api/information-system.js'
import complaint from '../api/information-complaint.js'
import wards from '../api/information-wards.js'

export default {
    name: 'informationPublicDetail',
    data() {
        return {
            content: '',
            datas: {
                system,
                complaint,
                wards,
            },
            is: '',
            id: ''
        }
    },
    mounted() {
        let tab = this.$route.query.is
        let id = this.$route.query.id
        this.is = tab
        this.id = id
        this.content = this.datas[tab] && this.datas[tab][`id${id}`] ? this.datas[tab][`id${id}`].content : ''
    }
}
</script>
<style scoped>
.information{
    max-width: 1388px;
    height: 726px;
    overflow: auto;
    background-color: white;
    border-radius: 10px;
    padding: 0 80px;
    box-sizing: border-box;
}
.text-content{
    font-size: 19px;
    text-indent: 37px;
    line-height: 39px;
    word-break: break-all;
    white-space: break-spaces;
}
img{
    max-width: 100%;
}
.iframe-information{
    width: 100%;
    height: 726px;
    background-color: white;
    border-radius: 10px;
}
</style>