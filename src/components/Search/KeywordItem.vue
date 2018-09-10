<template>
    <p @click='search'>{{value}}</p>
</template>

<script>
    export default {
        props: {
            value: {
                isRequired: true,
                type: String
            }
        },
        methods: {
            search () {
                this.$store.commit('changeKeyword', this.value)
                this.$store.dispatch('getSearchResult', this.value)
            }
        }
    }
</script>