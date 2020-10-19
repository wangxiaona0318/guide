<template>
    <div class="mod-government-service">
        <router-link class="gs-guide" to="/government-service-guide">
            办事指南
            <img src="../assets/government-service/py_gs_guide_icon.png" alt="">
        </router-link>
        <div class="gs-app">
            <div class="gs-top">
                <div class="gs-app-zlb">
                    企业服务直通车
                    <img src="../assets/government-service/gs-cp-qr-item.png" alt="">
                    扫码查看
                </div>
                <div class="ggs-app-zsb">
                    <div class="gs-qr-zlb">
                        <img src="../assets/government-service/gs-qr-zlb.png" alt="">
                        浙里办APP</div>
                    <div class="gs-qr-zsb">
                        <img src="../assets/government-service/gs-qr-zsb.png" alt="">
                        桐乡政务数据办微信公众号</div>
                </div>
            </div>
            <div class="gs-bottom">
                <span class="title">濮院镇政务服务中心</span>
                <div class="wrap-info">
                    <span class="address">地址：桐乡市濮院镇广场路人民政府</span>
                    <span class="tel">电话：88827036</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'governmentService'
}
</script>
<style lang="less" scope>
.mod-government-service{
    padding: 30px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    .gs-guide{
        padding-top: 170px;
        width: 617px;
        background: linear-gradient(180deg, #5AC8FA 0%, #358ED7 100%);
        border-radius: 12px;
        line-height: 50px;
        color: #fff;
        font-size: 36px;
        text-align: center;
        img{
            display: block;
            margin: 60px auto 0;
        }
    }
    .gs-app{
        margin-left: 8px;
        flex: 1;
        display: flex;
        flex-direction: column;
        .gs-top{
            height: 339px;
            display: flex;
            .gs-app-zlb{
                width: 262px;
                background: #4CD964;
                border-radius: 12px;
                line-height: 33px;
                font-size: 24px;
                color: #fff;
                padding-top: 48px;
                text-align: center;
                img{
                    display: block;
                    margin: 30px auto 23px;
                }
            }
            .ggs-app-zsb{
                margin-left: 8px;
                flex: 1;
                display: flex;
                flex-direction: column;
                .gs-qr-zlb{
                    background: #54BEF4;
                    border-radius: 12px;
                    height: 165px;
                    color: #fff;
                    font-size: 18px;
                    padding-left: 12px;
                    display: flex;
                    align-items: center;
                    img{
                        margin-right: 12px;
                    }
                }
                .gs-qr-zsb{
                    margin-top: 8px;
                    flex: 1;
                    background: #FF2D55;
                    border-radius: 12px;
                    color: #fff;
                    font-size: 18px;
                    padding-left: 12px;
                    display: flex;
                    align-items: center;
                    img{
                        margin-right: 12px;
                    }
                }
            }
        }
        .gs-bottom{
            margin-top: 8px;
            flex: 1;
            background: #FFCC00;
            border-radius: 12px;
            padding: 70px 0 0 60px;
            .wrap-info{
                margin-top: 16px;
            }
            .title{
                line-height: 50px;
                color: #B65C00;
                font-size: 36px;
            }
            .address, .tel{
                color: #B65C00;
                font-size: 24px;
                display: block;
                line-height: 33px;
            }
        }
    }
}
</style>