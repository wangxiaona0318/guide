<template>
    <div class="header">
        <div class="left-part">
            <div class="py_logo"></div>
            <div class="py_name">
                <!-- 世贸大厦 -->
                <!-- <div class="py_cn_name"></div>
                <div class="py_en_name">世贸大厦</div> -->
            </div>
        </div>
        <div class="middle-part"></div>
        <div class="right-part">
            <div class="py_qr">
                <div>
                    <img src="../assets/header/py_szjdymt.jpg" class="szjd-img">
                </div>
                <div>"四站九点"一码通</div>
            </div>
            <div class="py_qr">
                <div>
                    <img src="../assets/header/py_qr.jpg" class="pyqr-img">
                </div>
                <div>扫码关注毛衫城公众号</div>
            </div>
            <div class="py_sky_market">
                <img src="../assets/header/py_sky_market.png" alt="">
            </div>
            <div class="py_date_time">
                <div class="py_time">14:47</div>
                <div class="py_date">
                    <div class="py_date_top">2020.10.18</div>
                    <div class="py_date_bottom">星期日 Sun.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
    .header{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .left-part{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            .py_logo{
                width: 125px;
                height: 125px;
                background-size: cover;
                background-size: 100% 100%;
                background-image: url(../assets/header/py_logo.png);
                background-repeat: no-repeat;
                mix-blend-mode: multiply;
                margin-right: 12px;
            }
            .py_name{
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                height: 125px;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                .py_cn_name{
                    width: 390px;
                    height: 74px;
                    background-size: cover;
                    background-image: url(../assets/header/py_cn_name.png);
                    background-repeat: no-repeat;
                }
                .py_en_name{
                    width: 390px;
                    height: 26px;
                    margin-top: 12px;
                    background-size: cover;
                    background-image: url(../assets/header/py_en_name.png);
                    background-repeat: no-repeat;
                }
            }
        }
        .right-part{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            .py_qr{
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
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                font-weight: bold;
                margin-right: 30px;
                >div:first-child{
                    display: flex;
                }
                .pyqr-img, .szjd-img{
                    width: 100px;
                    height: 100px;
                }
            }
            .py_sky_market{
                width: 100px;
                height: auto;
                // background-size: cover;
                // background-size: 100% 100%;
                // background-image: url(../assets/header/py_sky_market.png);
                // background-repeat: no-repeat;
                margin-right: 50px;
                mix-blend-mode: multiply;
                img{
                    width: 100%;
                    height: auto;
                }
            }
            .py_date_time{
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: horizontal;
                -webkit-box-direction: normal;
                -ms-flex-direction: row;
                flex-direction: row;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                .py_time{
                    font-size: 65px;
                    font-weight: bold;
                    padding-right: 10px;
                }
                .py_date{
                    font-size: 20px;
                    .py_date_bottom{
                        margin-top: 5px;
                    }
                }
            }
        }

    }
</style>