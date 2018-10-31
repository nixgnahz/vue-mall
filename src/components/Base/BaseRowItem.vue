<template>
    <div class='base-row' @click='linkTo'>
        <div class='cover' :style='{backgroundImage: "url(" + data.cover + ")"}'></div>
        <div class='desc'>{{data.description}}</div>
        <div class='detail'>
            <p>¥{{price}}</p>
            <p>销量 {{data.sales}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BaseRowItem',
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

<style lang='scss'>
    @import "../../index.scss";
    .base-row {
        .cover {
            background-size: cover;
            width: 100%;
            height: 7rem;
        }
        .desc {
            margin: 0.25rem;
            @include multiline-text-overflow;
            font-size: 0.5rem;
        }
        .detail {
            margin: 0.45rem 0.25rem;
            @include flex-row-between;
            p {
                &:first-child {
                    color: $red-color;
                    font-size: 0.5rem;
                }
                &:last-child {
                    font-size: 0.5rem;
                    color: $light-gray;
                    @include scale(0.8);
                }
            }
        }
    }
</style>