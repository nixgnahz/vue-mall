<template>
    <div class='toast-mask'>
        <div class='toast'>{{toast.text}}</div>
    </div>
</template>

<script>
    export default {
        name: 'BaseToast',
        props: {
            toast: {
                type: Object,
                isRequired: true
            }
        }
    }
</script>

<style scoped lang='scss'>
    @import "../../index.scss";
    .toast-mask {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        @include flex-row-center;
        font-size: 0.55rem;
        z-index: 10000;
        .toast {
            background-color: rgba(0, 0, 0, 0.65);
            color: #fff;
            padding: 0.35rem 0.85rem;
            border-radius: 0.1rem;
        }
    }
</style>