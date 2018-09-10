<template>
    <div class='search-list'>
        <div class='search-list-title'>
            <img src='../../assets/image/icon/hot.png' />
            <span>热门搜索</span>
        </div>
        <div class='search-list-item'>
            <KeywordItem v-for='(item, index) in hotArr' :key='index' :value='item'/>
        </div>
    </div>
</template>

<script>
    import KeywordItem from './KeywordItem.vue'
    export default {
        components: {
            KeywordItem
        },
        props: ['hotArr']
    }
</script>