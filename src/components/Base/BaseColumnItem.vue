<template>
    <router-link :to='{name: "detail", params: {id: data.id}}'>
        <div class='cover' :style='{backgroundImage: "url(" + data.cover + ")"}'></div>
        <div class='info'>
            <div class='desc'>{{data.description}}</div>
            <p class='price'>¥{{price}}</p>
            <p class='sales'>销量 {{data.sales}}</p>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: ['data'],
        computed: {
            price () {
                return (this.data.price / 100).toFixed(2)
            }
        }
    }
</script>

<style lang='scss' scoped>
    @import "../../index.scss";
    a {
        padding: 0.35rem;
        @include flex-row-between;
        border-bottom: 1px solid $border-color;
        .cover {
            background-size: cover;
            width: 3.8rem;
            height: 4rem;
        }
        .info {
            width: 10rem;
            font-size: 0.5rem;
            .desc {
                margin-bottom: 0.5rem;
                @include multiline-text-overflow;
            }
            .price {
                color: $red-color;
                margin-bottom: 0.2rem
            }
            .sales {
                color: $light-gray;
                @include scale(0.8);
                transform-origin: left;
            }
        }
    }
</style>