<template>
    <div class="detail-goods">
        <p class="detail-goods-title">红米5系列</p>
        <p class="detail-goods-desc">红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄</p>
        <div class="detail-goods-money">
            <div class="price">
                <p class="now">¥1099.00</p>
                <p class="origin">¥1599.00</p>
            </div>
            <p class="sales">已售1034</p>
        </div>
        <div class="detail-goods-service" @click="showService">
            <p>
                <img src="../../assets/image/icon/choice.png"/>
                <span>72小时发货</span>
            </p>
            <p>
                <img src="../../assets/image/icon/choice.png"/>
                <span>7天无理由退货</span>
            </p>
            <p>
                <img src="../../assets/image/icon/choice.png"/>
                <span>延误必赔</span>
            </p>
            <img src="../../assets/image/icon/enter.png" class="enter"/>
        </div>
        <div class="detail-goods-style" @click="showStyle">
            <p>请选择 颜色 尺寸</p>
            <img src="../../assets/image/icon/enter.png" class="enter"/>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            showService () {
                this.$emit('changeServiceFlag')
            },
            showStyle () {
                this.$emit('changeStyleFlag')
            }
        }
    }
</script>