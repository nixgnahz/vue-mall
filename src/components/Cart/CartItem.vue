<template>
    <div class="cart-goods">
        <BaseChooseItem :selected="goods.selected" @change="change"></BaseChooseItem>
        <div class="cart-goods-cover" :style="{backgroundImage: `url(${goods.cover})`}"></div>
        <div class="cart-goods-info">
            <p class="desc">{{goods.name}}</p>
            <p class="param">{{goods.param.color}} {{goods.param.size}}</p>
            <p class="price">¥{{goods.price | formatPrice}}</p>
            <div class="cart-goods-action">
                <p @click="minus">-</p>
                <p class="num">{{goods.num}}</p>
                <p @click="add">+</p>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseChooseItem from '../Base/BaseChooseItem.vue'
    export default {
        components: {
            BaseChooseItem
        },
        props: {
            goods: {
                type: Object,
                isRequired: true
            }
        },
        methods: {
            change () {
                this.$store.dispatch('changeSelected', this.goods.id)
            },
            add () {
                this.$store.dispatch('addNum', this.goods.id)
            },
            minus () {
                this.$store.dispatch('minusNum', this.goods.id)
            }
        }
    }
</script>