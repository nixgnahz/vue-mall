<template>
    <div class='mask-box' @click='hide'>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        methods: {
            hide () {
                this.$emit('hide')
            }
        }
    }
</script>

<style lang='scss'>
    .mask-box {
        position: fixed;
        z-index: 1;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>