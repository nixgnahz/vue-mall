<template>
    <section class='detail'>
        <Swiper :swipers='swipers' v-if='swipers.length'/>
        <Description @changeServiceFlag='changeServiceFlag' @changeStyleFlag='changeStyleFlag'/>
        <Detail/>
        <div class='detail-holder'></div>
        <Action/>
        <transition name='slide-left'>
            <ServiceDetail v-if='serviceFlag' @change='changeServiceFlag'/>
        </transition>
        <transition name='slide-left'>
            <StyleDetail v-if='styleFlag' @change='changeStyleFlag'/>
        </transition>
    </section>
</template>

<script>
    import Swiper from './Swiper.vue'
    import Description from './Description.vue'
    import Detail from './Detail.vue'
    import Action from './Action.vue'
    import ServiceDetail from './ServiceDetail.vue'
    import StyleDetail from './StyleDetail.vue'
    export default {
        components: {
            Swiper,
            Description,
            Detail,
            Action,
            ServiceDetail,
            StyleDetail
        },
        data () {
            return {
                serviceFlag: 0,
                styleFlag: 0,
                swipers: [
                    {
                        id: 1,
                        cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/1/5/f/5b49aa09d4552.png'
                    },
                    {
                        id: 2,
                        cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/3/4/4/d/5b49aa016c765.png'
                    },
                    {
                        id: 3,
                        cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/1/5/f/5b49aa09d4552.png'
                    }
                ]
            }
        },
        beforeRouteUpdate (to, from, next) {
            //带有动态参数的路径改变
        },
        methods: {
            changeServiceFlag () {
                this.serviceFlag = this.serviceFlag ? 0 : 1;
            },
            changeStyleFlag () {
                this.styleFlag = this.styleFlag ? 0 : 1;
            }
        }
    }
</script>

<style lang="scss">
    @import './index.scss'
</style>