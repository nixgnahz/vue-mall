<template>
    <section class="home">
        <Search :style="styleObj"/>
        <Swiper :swipers="swipers" v-if="swipers.length"/>
        <Menu/>
        <Detail/>
        <BaseMenuHolder/>
        <TabBar/>
    </section>
</template>

<script>
    import Search from './Search.vue'
    import Menu from './Menu.vue'
    import Swiper from './Swiper.vue'
    import Detail from './Detail.vue'
    import BaseMenuHolder from '../Base/BaseMenuHolder.vue'
    import TabBar from '../Menu/Index.vue'
    export default {
        components: {
            Search,
            Swiper,
            Menu,
            Detail,
            BaseMenuHolder,
            TabBar
        },
        data () {
            return {
                swipers: [
                    {
                        id: 1,
                        cover: 'https://t00img.yangkeduo.com/t09img/images/2018-07-17/12cbb62b9ada2512ff7399defa0602c4.jpeg'
                    },
                    {
                        id: 2,
                        cover: 'https://t00img.yangkeduo.com/t02img/images/2018-07-17/739ec209ab0703688f1b06552d08a167.jpeg'
                    },
                    {
                        id: 3,
                        cover: 'https://t00img.yangkeduo.com/t01img/images/2018-07-16/7df735fc06224379188643157b7163aa.jpeg'
                    },
                    {
                        id: 4,
                        cover: 'https://t00img.yangkeduo.com/t10img/images/2018-07-15/6ffb686c00598a665b5323e4fa3eb1d7.jpeg'
                    }
                ]
            }
        },
        computed: {
            styleObj () {
                if (!this.swipers.length) {
                    return {
                        'background-color': "#ededed"
                    }
                } else{
                   return {
                       'background-color': "#ffffff",
                       'position': "absolute",
                       'z-index': 100
                   }
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "./index.scss";
</style>