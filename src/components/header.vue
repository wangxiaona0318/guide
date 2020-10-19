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
                <div>世贸大厦公众号</div>
            </div>
            <div class="py_qr">
                <div>
                    <img src="../assets/header/qr.png" class="pyqr-img">
                </div>
                <div>空中濮院</div>
            </div>
            <div class="py_qr">
                <div>
                    <img src="../assets/header/py_sky_market.png" class="pyqr-img">
                </div>
                <div>抖音</div>
            </div>
            <!-- <div class="py_sky_market">
                <img src="../assets/header/py_sky_market.png" alt="">
            </div> -->
            <div class="py_date_time">
                <div class="py_time">{{time}}</div>
                <div class="py_date">
                    <div class="py_date_top">{{date}}</div>
                    <div class="py_date_bottom">{{week}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // name: 'header',
    data() {
        return {
            time: '',
            date: '',
            week: '',
        }
    },
    mounted() {
        setInterval(() => {
            var day = new Date();
            this.week = this.$moment(day).format('dddd');
            this.date = this.$moment(day).format('YYYY.MM.DD');
            this.time = this.$moment(day).format('HH:mm');
        }, 1000)
    }
}
</script>

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
                width: 200px;
                height: 200px;
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
                    width: auto;
                    height: 150px;
                }
            }
            .py_sky_market{
                width: 128px;
                height: 165px;
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