<template>
    <section class="order">
        <Search/>
        <Menu/>
        <OrderItem v-for="item in orders" :order="item" :key="item.id"/>
        <OrderEmpty v-if="!orders.length"/>
    </section>
</template>

<script>
    import Search from './Search.vue'
    import Menu from './Menu.vue'
    import OrderItem from './OrderItem.vue'
    import OrderEmpty from './OrderEmpty.vue'
    export default {
        name: 'Orders',
        components: {
            Search,
            Menu,
            OrderItem,
            OrderEmpty
        },
        data () {
            return {
                orders: [
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
                        price: '1099.00',
                        num: 1
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import "./index.scss"
</style>