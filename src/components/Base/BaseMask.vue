<template>
    <div class='mask-box'>
        <slot></slot>
    </div>
</template>

<script>

</script>

<style lang='scss'>
    .mask-box {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>