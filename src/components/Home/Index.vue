<template>
    <section class='home'>
        <Search/>
        <Swiper/>
        <Menu/>
        <BaseMenuHolder/>
        <TabBar/>
    </section>
</template>

<script>
    import Search from './Search.vue'
    import Menu from './Menu.vue'
    import Swiper from './Swiper.vue'
    import BaseMenuHolder from '../Base/BaseMenuHolder.vue'
    import TabBar from '../Menu/Index.vue'
    export default {
        components: {
            Search,
            Menu,
            Swiper,
            BaseMenuHolder,
            TabBar
        }
    }
</script>

<style lang="scss">
    @import './index.scss';
</style>