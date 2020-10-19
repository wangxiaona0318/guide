<template>
    <div class="navigation" :style="{marginTop: $route.meta.top ? $route.meta.top + 'px' : ''}">
        <div class="navigation-bar">
            <router-link
                :class="{active: k===index}"
                class="link-item"
                @click.native="handle(k)"
                :to="v.to" v-for="(v, k) in data" :key="k">
                <div class="cn-title">{{v.ch}}</div>
                <div class="en-title">{{v.en}}</div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'left',
    data(){
        return {
            data: [
                { ch: '导购台', en: 'SHOPPING GUIDE', to: 'shopping-guide' },
                { ch: '信息公示', en: 'INFORMATION PUBLICITY', to: 'information-public' },
                { ch: '最多跑一次', en: 'GOVERNMENT SERVICE', to: 'government-service' },
                { ch: '交通指引', en: 'TRAFFIC GUIDANCE', to: 'traffic-guidance' },
                { ch: '餐饮住宿', en: 'RESTAURANT&HOTEL', to: 'restaurant-hotel' },
                { ch: '旅游景点', en: 'SCENIC SPOT', to: 'tourist-attraction' },
            ],
            index: 0,
        }
    },
    methods: {
        handle(k) {
            this.index = k
        }
    }
}
</script>
<style scoped lang="less">
    .navigation-bar{
        margin-right: 34px;
        .link-item{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            width: 204px;
            height: 81px;
            background: #FFFFFF;
            border-radius: 40px;
            border: 1px solid #CE292C;
            box-sizing: border-box;
            &:not(:last-child) {
                margin-bottom: 38px;
            }
            .cn-title{
                margin-bottom: 7px;
                color: #CE292C;
                font-size: 24px;
                line-height: 33px;
            }
            .en-title{
                font-size: 14px;
                color: #000;
            }
            &:hover, &.active{
                background: #CE292C;
                .cn-title, .en-title{
                    color: #fff;
                }
            }
        }

    }
</style>