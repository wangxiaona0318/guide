<template>
    <div class="information">
        <pre v-html="content" class="text-content"></pre>
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
            }
        }
    },
    mounted() {
        let tab = this.$route.query.is
        let id = this.$route.query.id
        this.content = this.datas[tab][`id${id}`].content
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
</style>