<template>
    <div class="order-detail-goods">
        <p class="order-detail-goods-shop">小米官方商城</p>
        <router-link :to="{name: 'detail', params: {id: order.id}}">
            <BaseGoodsItem :order="order"/>
        </router-link>
        <div class="order-detail-goods-price">
            <p>商品金额</p>
            <p>¥{{order.price | formatPrice}}</p>
        </div>
        <div class="order-detail-goods-freight">
            <p>运费</p>
            <p>免运费</p>
        </div>
        <div class="order-detail-goods-money">
            <p>实际付款（含运费）</p>
            <p>¥{{order.price | sumPrice(order.num)}}</p>
        </div>
    </div>
</template>

<script>
    import BaseGoodsItem from '../Base/BaseGoodsItem.vue'
    export default {
        components: {
            BaseGoodsItem
        },
        data () {
            return {
                order: {
                   id: 1,
                   shop: '小米手机商城',
                   statusCode: 0,
                   status: '待支付',
                   cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
                   name: '红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄',
                   param: {
                     color: '金色',
                     size: '3G+32G'
                   },
                   freight: 0,
                   price: '109900',
                   num: 2
                 }
            }
        }
    }
</script>