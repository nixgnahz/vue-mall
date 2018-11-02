<template>
    <div class='pay-goods'>
        <GoodsItem :goods='goods'/>
    </div>
</template>

<script>
    import GoodsItem from './GoodsItem.vue'
    export default {
        components: {
            GoodsItem
        },
        props: {
            goods: {
                type: Object,
                isRequired: true
            }
        }
    }
</script>