<template>
    <div class='choose-item'>
        <img src='../../assets/image/icon/unselected.png' v-if='!selected'/>
        <img src='../../assets/image/icon/selected.png' v-if='selected'/>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ['selected']
    }
</script>

<style lang='scss'>
    .choose-item {
        img {
            width: 1.2rem;
            height: 1.2rem;
        }
    }
</style>