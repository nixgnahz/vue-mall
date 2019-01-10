<template>
    <section class="pay">
        <Address/>
        <Goods v-for="item in goods" :key="item.id" :goods="item"/>
        <Money/>
        <div class="pay-holder"></div>
        <PayAction :goods="goods"/>
    </section>
</template>

<script>
    const goods = [
        {
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
            num: 1
        },
        {
            id: 2,
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
            num: 1
        },
        {
            id: 3,
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
            num: 1
        }
    ]
    import Address from './Address.vue'
    import Goods from './Goods.vue'
    import Money from './Money.vue'
    import PayAction from './PayAction.vue'
    export default {
        name: 'PayDetail',
        components: {
            Address,
            Goods,
            Money,
            PayAction
        },
        data () {
            return {
                goods: goods
            }
        }
    }
</script>

<style lang="scss">
    @import "./index.scss"
</style>