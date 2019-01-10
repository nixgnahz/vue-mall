<template>
    <div class="search-list">
        <div class="search-list-title">
            <img src="../../assets/image/icon/recent.png" />
            <span>最近搜索</span>
            <img @click="deleteHistory" class="delete-icon" src="../../assets/image/icon/delete.png" />
        </div>
        <div class="search-list-item">
            <KeywordItem v-for="(item, index) in historyArr" :key="index" :value="item"/>
        </div>
    </div>
</template>

<script>
    import KeywordItem from './KeywordItem.vue'
    export default {
        components: {
            KeywordItem
        },
        props: {
            historyArr: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            deleteHistory () {
                this.$store.commit('deleteHistory')
            }
        }
    }
</script>