<template>
    <div>
        <div class="tab">
            <div @click="tabChange(v, k)" :class="{active: index === k}" class="tab-item" v-for="(v, k) in tab" :key="k">{{v.name}}</div>
        </div>
        <div class="tab-body">
            <div class="tab-detail">
                <router-link class="rh-detail" to="/restaurant-hotel-detail">
                    <img src="http://47.110.135.173/maofancity/admin/public/uploads/images/covers/2020/0911/user_1_1599818458_6ktmoqBhFk.png" alt="">
                    <div class="name">炉哩烧 碳烤羊腿·烧烤（濮院6号店）</div>
                    <div class="address">桐乡市濮院齐宏路317号</div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'restaurantHotel',
    data() {
        return {
            tab: [
                { name: '餐饮' },
                { name: '住宿' },
            ],
            index: 0,
        }
    },
    methods: {
        tabChange(v, k){
            this.index = k
        },
    }
}
</script>
<style scoped lang="less">
    .tab-body{
        margin-top: 30px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .tab-detail{
            width: 1331px;
            height: 522px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
            .rh-detail{
                width: 312px;
                height: 90px;
                margin: 10px;
                text-decoration: none;
                img{
                    width: 312px;
                    height: 165px;
                    border-radius: 10px;
                }
            }
            .name{
                width: 100%;
                color: black;
                margin-top: 15px;
                font-size: 25px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-decoration: none;
            }
            .address{
                width: 100%;
                margin-top: 15px;
                font-size: 20px;
                color: #999999;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-decoration: none;
            }
        }
    }
</style>