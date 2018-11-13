<template>
    <section class="menu-list">
        <router-link :to="{name: 'home'}">
            <img src="../../assets/image/menu/home-fill.png" v-if="activeMenu === 'home'"/>
            <img src="../../assets/image/menu/home.png" v-else/>
            <p>首页</p>
        </router-link>
        <router-link :to="{name: 'list'}">
            <img src="../../assets/image/menu/category-fill.png" v-if="activeMenu === 'list'"/>
            <img src="../../assets/image/menu/category.png" v-else/>
            <p>分类</p>
        </router-link>
        <router-link :to="{name: 'cart'}">
            <img src="../../assets/image/menu/cart-fill.png" v-if="activeMenu === 'cart'"/>
            <img src="../../assets/image/menu/cart.png" v-else/>
            <p>购物车</p>
        </router-link>
        <router-link :to="{name: 'person'}">
            <img src="../../assets/image/menu/person-fill.png" v-if="activeMenu === 'person'"/>
            <img src="../../assets/image/menu/person.png" v-else/>
            <p>个人</p>
        </router-link>
    </section>
</template>

<script>
    export default {
        computed: {
            activeMenu () {
                return this.$route.name
            }
        }
    }
</script>

<style lang="scss">
    @import "./index.scss";
</style>