<template>
    <div class="mask-transparent">
        <img src="../../assets/image/icon/loading.png" />
    </div>
</template>

<script>
    export default {
        name: 'BaseLoad'
    }
</script>

<style lang="scss">
    @import "../../index.scss";
    .mask-transparent {
        position: fixed;
        z-index: 100;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        background-color: transparent;
        @include flex-row-center;
        img {
            width: 1.5rem;
            animation: spin 2s linear infinite;
        }
    }
</style>