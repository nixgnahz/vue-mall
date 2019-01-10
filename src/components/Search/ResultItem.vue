<template>
    <li>
        <router-link :to="{name: 'detail', params: {id: result.id}}">
            <div class="goods-cover" :style="{backgroundImage: `url(${result.cover})`}"></div>
            <div class="goods-info">
                <p class="goods-info-title">{{result.name}}</p>
                <p class="goods-info-desc">{{result.description}}</p>
                <p class="goods-info-price">¥ {{result.price | formatPrice}}</p>
            </div>
        </router-link>
    </li>
</template>

<script>
    export default {
        props: {
            result: {
                type: Object,
                isRequired: true
            }
        }
    }
</script>