<template>
     <div class="government-detail-body">
        <router-link class="return" to="/government-service-guide">
            <img src="../assets/return.png" class="return-img">
            返回
        </router-link>
        <div class="list">
            <router-link :to="`/government-service-article?id=${v.id}`" class="item" v-for="(v, k) in data" :key="k">
                <div class="title">{{v.title}}</div>
                <div class="split-line"></div>
            </router-link>
        </div>
    </div>
</template>
<script>
import data from '../api/government-service-guide-detail.js'
export default {
    name: 'governmentServiceGuideDetail',
    data() {
        return {
            data: []
        }
    },
    mounted() {
        let type = this.$route.query.type
        this.data = data[type].data

    }
}
</script>
<style lang="less" scoped>
    .government-detail-body{
        padding: 0 30px;
        position: relative;
        height: 100%;
        border: 1px solid #CE292C;
        border-radius: 24px;
    }
    .list{
        padding-top: 30px;
        height: calc(100% - 116px);
        overflow: auto;
    }
</style>