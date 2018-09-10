<template>
    <section class='address'>
        <Edit v-show='editFlag'/>
        <List v-show='!editFlag'/>
    </section>
</template>

<script>
    import List from './List.vue'
    import Edit from './Edit.vue'
    export default {
        components: {
            List,
            Edit
        },
        computed: {
            editFlag () {
                return this.$store.state.address.editFlag
            }
        }
    }
</script>

<style lang="scss">
    @import './index.scss'
</style>