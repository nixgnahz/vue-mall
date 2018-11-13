<template>
    <div class="search-box">
        <div class="search-input">
            <img src="../../assets/image/icon/search.png" />
            <input placeholder="请输入商品名称" v-model.trim="keyword"/>
            <img @click="hideResult" src="../../assets/image/icon/close.png" v-show="showResult"/>
        </div>
        <p class="search-btn" @click="search">搜索</p>
    </div>
</template>

<script>
    export default {
        computed: {
            showResult () {
                return this.$store.state.search.showResult
            },
            keyword: {
               get () {
                    return this.$store.state.search.keyword
               },
               set (value) {
                    return this.$store.commit('changeKeyword', value)
               }
            }
        },
        methods: {
            hideResult () {
                this.$store.commit('hideResult')
            },
            search () {
                this.$store.dispatch('getSearchResult', this.keyword)
            }
        }
    }
</script>