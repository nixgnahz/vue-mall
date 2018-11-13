<template>
    <div class="order-list">
        <router-link :to="{name: "info", params: {id: order.id}}">
            <div class="order-list-shop">
                <p>{{order.shop}}</p>
                <span>待支付</span>
            </div>
            <BaseGoodsItem :order="order"/>
            <div class="order-list-total">合计：¥{{total}}</div>
            <div class="order-list-action">
                <p>去支付</p>
                <p>取消订单</p>
            </div>
        </router-link>
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
        },
        computed: {
            total () {
                return (this.order.price * this.order.num).toFixed(2)
            }
        }
    }
</script>