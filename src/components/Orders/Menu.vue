<template>
    <div class="order-menu">
        <p v-for="(item, index) in menuArr" :class="{active: index == activeIndex}" @click="changeIndex(index)">{{item}}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                menuArr: ['全部', '待付款', '待发货', '待收货', '待评价']
            }
        },
        computed: {
            activeIndex () {
                return this.$store.state.order.activeIndex
            }
        },
        methods: {
            changeIndex (index) {
                if (this.$store.state.order.activeIndex != index) {
                    this.$store.commit('changeActiveIndex', index)
                }
            }
        }
    }
</script>