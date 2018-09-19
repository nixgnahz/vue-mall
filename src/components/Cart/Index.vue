<template>
    <section class='cart'>
        <CartItem v-for='item in goods' :key='item.id' :goods='item'/>
        <CartEmpty v-if='!goods.length'/>
        <CartAction v-if='goods.length'/>
        <Recommend/>
        <BaseMenuHolder/>
        <TabBar/>
    </section>
</template>

<script>
    import CartItem from './CartItem.vue'
    import CartEmpty from './CartEmpty.vue'
    import CartAction from './CartAction.vue'
    import Recommend from '../Recommend/Index.vue'
    import BaseMenuHolder from '../Base/BaseMenuHolder.vue'
    import TabBar from '../Menu/Index.vue'
    export default {
        components: {
            CartItem,
            CartEmpty,
            CartAction,
            Recommend,
            BaseMenuHolder,
            TabBar
        },
        computed: {
            goods () {
                return this.$store.state.cart.cartList
            }
        },
        created () {
            this.$store.dispatch('getCartList')
        }
    }
</script>

<style lang="scss">
    @import './index.scss'
</style>