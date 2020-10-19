<template>
    <div class="tab-body">
        <div class="tab-detail">
            <router-link class="rh-detail" to="/tourist-attraction-detail">
                <img src="http://47.110.135.173/maofancity/admin/public/uploads/images/covers/2020/0911/user_1_1599818458_6ktmoqBhFk.png" alt="">
                <div class="name">炉哩烧 碳烤羊腿·烧烤（濮院6号店）</div>
                <div class="address">桐乡市濮院齐宏路317号</div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'touristAttraction'
}
</script>
<style lang="less" scoped>
.tab-detail{
    padding: 15px;
    width: 1360px;
    height: 630px;
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
        width: 310px;
        height: 285px;
        margin: 15px;
        text-decoration: none;
        img{
            width: 310px;
            height: 200px;
            border-radius: 10px;
        }
        .name{
            color: black;
            margin-top: 15px;
            font-size: 25px;
            white-space: nowrap;
            text-decoration: none;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .address{
            margin-top: 15px;
            font-size: 20px;
            color: #999999;
            white-space: nowrap;
            text-decoration: none;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}
</style>