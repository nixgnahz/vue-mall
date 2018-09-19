<template>
    <div class='cart-action'>
        <BaseChooseItem :selected='allSelected' @change='changeAll'>
            <span>全选</span>
        </BaseChooseItem>
        <p class='total'>
            <span>合计</span>
            <span>¥{{total}}</span>
        </p>
        <div class='pay-btn'>
            <span>去结算</span>
            <p></p>
        </div>
    </div>
</template>

<script>
    import BaseChooseItem from '../Base/BaseChooseItem.vue'
    export default {
        components: {
            BaseChooseItem
        },
        computed: {
            allSelected () {
                return this.$store.state.cart.allSelected
            },
            total () {
                return this.$store.state.cart.total
            }
        },
        methods: {
            changeAll () {
                this.$store.dispatch('changeAll')
            }
        }
    }
</script>