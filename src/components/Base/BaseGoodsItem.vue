<template>
    <div class='detail'>
        <div class='cover' :style='{backgroundImage: "url(" + order.cover + ")"}'></div>
        <div class='desc'>
            <p>{{order.name}}</p>
            <p>{{order.param.color}} {{order.param.size}}</p>
        </div>
        <div class='price'>
            <p>¥{{order.price}}</p>
            <p>x{{order.num}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['order']
    }
</script>

<style scoped lang='scss'>
    @import "../../index.scss";
    .detail {
        font-size: 0.55rem;
        @include flex-row-between;
        background-color: $bg-color;
        padding: 0.5rem;
        .cover {
            width: 3rem;
            height: 3rem;
            @include cover;
        }
        .desc {
            height: 3rem;
            margin: 0px 0.5rem;
            @include flex;
            @include flex-column;
            justify-content: space-between;
            @include flex-1;
            p {
                &:first-child {
                    @include multiline-text-overflow;
                }
                &:last-child {
                    color: $light-gray;
                }
            }
        }
        .price {
            height: 3rem;
            @include flex;
            @include flex-column;
            align-items: flex-end;
            justify-content: space-between;
        }
    }
</style>