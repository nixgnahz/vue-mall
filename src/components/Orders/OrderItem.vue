<template>
    <div class="order-list">
        <div class="order-list-shop">
            <p>{{order.shop}}</p>
            <span>待支付</span>
        </div>
        <router-link :to="{name: 'info', params: {id: order.id}}">
            <BaseGoodsItem :order="order"/>
        </router-link>
        <div class="order-list-total">合计：¥{{order.price | sumPrice(order.num)}}</div>
        <div class="order-list-action">
            <p>去支付</p>
            <p>取消订单</p>
        </div>
    </div>
</template>

<script>
    import BaseGoodsItem from '../Base/BaseGoodsItem.vue'
    export default {
        components: {
            BaseGoodsItem
        },
        props: {
            order: {
                type: Object,
                isRequired: true
            }
        }
    }
</script>