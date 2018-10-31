<template>
    <div class='cart-action'>
        <BaseChooseItem :selected='allSelected' @change='changeAll'>
            <span>全选</span>
        </BaseChooseItem>
        <p class='total'>
            <span>合计</span>
            <span>¥{{total}}</span>
        </p>
        <div class='pay-btn' @click='payOrder'>
            <span>去结算</span>
            <p></p>
        </div>
    </div>
</template>

<script>
    import BaseChooseItem from '../Base/BaseChooseItem.vue'
    import {mapState} from 'vuex'
    export default {
        components: {
            BaseChooseItem
        },
        computed: mapState({
            allSelected: (state)=> state.cart.allSelected,
            total: (state)=> state.cart.total
        }),
        methods: {
            changeAll () {
                this.$store.dispatch('changeAll')
            },
            payOrder () {
                if (this.total <= 0) return;
                this.$router.push({name: 'pay', params: {id: 1}})
            }
        }
    }
</script>