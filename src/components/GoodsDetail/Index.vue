<template>
    <section class='detail'>
        <Swiper/>
        <Description @changeServiceFlag='changeServiceFlag' @changeStyleFlag='changeStyleFlag'/>
        <Detail/>
        <div class='detail-holder'></div>
        <Action/>
        <ServiceDetail v-if='serviceFlag' @change='changeServiceFlag'/>
        <StyleDetail v-if='styleFlag' @change='changeStyleFlag'/>
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
                styleFlag: 0
            }
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