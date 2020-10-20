<template>
    <div class="article-content">
        <div class="title">{{title}}</div>
        <img :src="url" alt="">
    </div>
</template>
<script>
import data from '../api/government-service-article'
export default {
    name: 'governmentServiceArticle',
    data() {
        return {
            url: '',
            title: '',
        }
    },
    mounted() {
        let id = this.$route.query.id
        try {
            this.url = require(`../assets/government-service-article/${id}.jpg`)
        }catch {
            this.url =''
        }
        this.title = data[id]
    }
}
</script>
<style lang="less" scoped>
.article-content{
    padding: 80px;
    text-align: center;
    .title{
        font-weight: 900;
        font-size: 18px;
    }
    img{
        margin-top: 36px;
        max-width: 100%;
    }
}
</style>