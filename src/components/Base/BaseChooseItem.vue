<template>
    <div class='choose-item' @click='change'>
        <img src='../../assets/image/icon/unselected.png' v-if='!selected'/>
        <img src='../../assets/image/icon/selected.png' v-if='selected'/>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ['selected'],
        methods: {
            change () {
                this.$emit('change')
            }
        }
    }
</script>

<style lang='scss'>
    @import "../../index.scss";
    .choose-item {
        @include flex-row-center;
        img {
            width: 1.2rem;
            height: 1.2rem;
        }
    }
</style>