<template>
    <ul class='search-result'>
        <li v-for='item in resultArr' :key='item.id'>
            <router-link :to="{name: 'detail', params: {id: item.id}}">
                <div class='goods-cover' :style='{backgroundImage: "url(" + item.cover + ")"}'></div>
                <div class='goods-info'>
                    <p class='goods-info-title'>{{item.name}}</p>
                    <p class='goods-info-desc'>{{item.description}}</p>
                    <p class='goods-info-price'>¥ {{item.price}}</p>
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        props: ['resultArr']
    }
</script>