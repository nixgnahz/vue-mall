<template>
    <section class="order-detail">
        <OrderStatus/>
        <OrderAddress/>
        <GoodsDetail/>
        <div class="order-detail-telephone">
            <img src="../../assets/image/icon/tel.png"/>
            <span>拨打商家电话</span>
        </div>
        <OrderInfo/>
        <div class="order-detail-holder"></div>
        <OrderAction/>
    </section>
</template>

<script>
    import OrderStatus from './OrderStatus.vue'
    import OrderAddress from './OrderAddress.vue'
    import OrderInfo from './OrderInfo.vue'
    import GoodsDetail from './GoodsDetail.vue'
    import OrderAction from './OrderAction.vue'
    export default {
        components: {
            OrderStatus,
            OrderAddress,
            OrderInfo,
            GoodsDetail,
            OrderAction
        }
    }
</script>

<style lang="scss">
    @import "./index.scss"
</style>