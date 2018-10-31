<template>
    <div class='back-top' @click='backTop'>
        <img src='../../assets/image/icon/back-top.png' />
    </div>
</template>

<script>
    export default {
        name: 'BackTop',
        methods: {
            backTop () {
                document.documentElement.scrollTop = document.body.scrollTop = 0;
                this.$emit('backTop')
            }
        }
    }
</script>

<style lang='scss'>
    .back-top {
        position: fixed;
        bottom: 3rem;
        right: 1rem;
        z-index: 100;
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border: 2px solid #dbdbdb;
        img {
            width: 0.9rem;
            height: 0.9rem;
        }
    }
</style>