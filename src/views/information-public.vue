<template>
    <div class="shopping-guide">
        <div class="tab">
            <div @click="tabChange(v, k)" :class="{active: index === k}" class="tab-item" v-for="(v, k) in tab" :key="k">
                <a v-if="v.name=='产品价格'" href="http://puyuan1.ctei.cn/login" target="_blank">{{v.name}}</a>
                <span v-else>{{v.name}}</span>
            </div>
        </div>
        <div class="information-content">
            <div class="item" v-for="(v, k) in data" :key='k'>
                <router-link :to="`/information-public-detail?is=${component}&id=${v.id}`" class="title">{{v.title}}</router-link>
                <div class="split-line"></div>
            </div>
        </div>
        <!-- <component :is="component"></component> -->
    </div>
</template>
<script>
import data from '../api/information'

export default {
    name: 'informationPublic',
    data() {
        return {
            component: 'system',
            tab: [
                { name: '制度建设', component: 'system' },
                { name: '产品质量', component: 'quality' },
                { name: '产品价格', component: 'price' },
                { name: '经营户奖惩', component: 'wards' },
                { name: '消费投诉处理', component: 'complaint' },
            ],
            index: 0,
            data: data['system'].data,
        }
    },
    methods: {
        tabChange(v, k){
            this.component = v.component
            this.index = k
            this.data = data[v.component] ? data[v.component].data : []
        },
    }
}
</script>
<style scoped lang="less">
    .shopping-guide{
        border: 1px solid #CE292C;
        border-radius: 24px;
    }
    .information-content{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-line-pack: start;
        align-content: flex-start;
        padding: 30px;
        height: 502px;
        width: 100%;
        box-sizing: border-box;
        margin-top: 22px;
        overflow: auto;
        .item{
            width: 100%;
            .title{
                width: 100%;
                font-size: 30px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                text-decoration: none;
                color: black;
            }
            .split-line{
                width: 100%;
                border-bottom: 2px dashed #CE292C;
                margin: 25px 0px;
            }
        }
    }
</style>