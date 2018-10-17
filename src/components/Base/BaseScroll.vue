<template>
    <pull-to @bottom-pull="loadMore" @top-pull="refresh">
        <slot></slot>
    </pull-to>
</template>

<script>
    import PullTo from 'vue-pull-to'
    export default {
        components: {
            PullTo
        },
        methods: {
            loadMore () {
                this.$emit('loadMore')
            },
            refresh () {
                this.$emit('refresh')
            }
        }
    }
</script>