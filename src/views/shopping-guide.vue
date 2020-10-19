<template>
    <div class="shopping-guide">
        <div class="tab">
            <div @click="tabChange(v, k)" :class="{active: index === k}" class="tab-item" v-for="(v, k) in tab" :key="k">{{v.name}}</div>
        </div>
        <component :is="component"></component>
    </div>
</template>
<script>
import layer from '../components/shopping-guide/layer.vue'
import shop from '../components/shopping-guide/shop.vue'

export default {
    name: 'shoppingGuide',
    components: {
        layer,
        shop,
    },
    data() {
        return {
            component: layer,
            tab: [
                { name: '楼层平面图', component: 'layer' },
                { name: '店铺索引', component: 'shop' },
            ],
            index: 0,
        }
    },
    methods: {
        tabChange(v, k){
            this.component = v.component
            this.index = k
        },
    }
}
</script>
<style scoped lang="less">
.shopping-guide{
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 1px solid #CE292C;
    border-radius: 24px;
    // -webkit-box-shadow: 2px 5px 12px #ECECEC;
    // box-shadow: 2px 5px 12px #ECECEC;
}
</style>