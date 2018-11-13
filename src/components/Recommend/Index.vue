<template>
    <section class="recommend" v-if="recommendArr.length">
        <div class="recommend-title">
            <img src="../../assets/image/icon/recommend.png" />
            <p>精选推荐</p>
        </div>
        <div class="recommend-list">
            <BaseRowItem v-for="item in recommendArr" :data="item" :key="item.id"/>
        </div>
    </section>
</template>

<script>
    import BaseRowItem from '../Base/BaseRowItem.vue'
    export default {
        computed: {
            recommendArr () {
                return this.$store.state.recommend.recommendArr
            }
        },
        components: {
            BaseRowItem
        },
        created () {
            this.$store.dispatch('getRecommend')
        }
    }
</script>

<style lang="scss">
    @import "./index.scss"
</style>