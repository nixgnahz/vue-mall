<template>
    <div class="pay-goods-detail">
        <p class="cover" :style="{backgroundImage: `url(${goods.cover})`}"></p>
        <div class="desc">
            <p>{{goods.name}}</p>
            <p>{{goods.param.color}} {{goods.param.size}}</p>
        </div>
        <div class="price">
            <p>¥{{goods.price | formatPrice}}</p>
            <p>x{{goods.num}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            goods: {
                type: Object,
                isRequired: true
            }
        }
    }
</script>