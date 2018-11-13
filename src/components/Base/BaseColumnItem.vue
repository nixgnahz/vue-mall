<template>
    <div class="base-column" @click="linkTo">
        <div class="cover" :style="{backgroundImage: 'url(' + data.cover + ')'}"></div>
        <div class="info">
            <div class="desc">{{data.description}}</div>
            <p class="price">¥{{price}}</p>
            <p class="sales">销量 {{data.sales}}</p>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'BaseColumnItem',
        props: {
            data: {
                type: Object,
                isRequired: true
            }
        },
        computed: {
            price () {
                return (this.data.price / 100).toFixed(2)
            }
        },
        methods: {
            linkTo () {
                this.$router.push({
                    name: 'detail',
                    params: {
                       id: this.data.id
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    @import "../../index.scss";
    .base-column {
        padding: 0.35rem;
        position: relative;
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
        .action {
            position: absolute;
            right: 0.35rem;
            bottom: 0rem;
            img {
                @include square-img(0.8rem);
                margin: 0.25rem;
            }
        }
    }
</style>