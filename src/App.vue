<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'home',
}
</script>
<style lang="less">
body {
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.15;
    color: #303133;
    background-color: #fff;
    margin: 0;
}
html, body, div, span, a{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
// tab头
.tab{
    display: flex;
    border-bottom: 2px solid #DEDEDE;
    line-height: 86px;
    padding-left: 80px;
    box-sizing: border-box;
    .tab-item{
        position: relative;
        color: #000000;
        width: 160px;
        font-size: 24px;
        text-align: center;
        cursor: pointer;
        &.active{
            color: #CE292C;
            &:after{
                content: '';
                width: 100%;
                position: absolute;
                left: 0;
                bottom: 0;
                height: 4px;
                background: #CE292C;
                border-radius: 2px;
                font-size: 24px;
            }
        }
    }
}
// 分页
.el-pagination .btn-next .el-icon, .el-pagination .btn-prev .el-icon, .el-pager li{
  font-size: 20px;
}
.el-pagination{
    display: flex;
    width: 100%;
    justify-content: center;
}
// 导航
.guide-storey{
    width: 72px;
    height: 445px;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.16);
    border-radius: 57px;
    padding-top: 32px;
    box-sizing: border-box;
    .storey-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        .storey-item{
            margin-bottom: 20px;
            width: 56px;
            height: 56px;
            background: #FDF3F3;
            border: 1px solid #FDF3F3;
            cursor: pointer;
            border-radius: 50%;
            font-size: 24px;
            line-height: 56px;
            text-align: center;
            color: #CE292C;
            cursor: pointer;
            &.active{
                background: #CE292C;
                color: #fff;
            }
        }
    }
}
// 返回
.return{
    display: block;
    line-height: 86px;
    border-bottom: 1px solid #DEDEDE;
    color: #CE292C;
    font-size: 24px;
}
.return-img{
    vertical-align: -4px;
    margin-right: 10px;
}
// 列表
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
</style>
