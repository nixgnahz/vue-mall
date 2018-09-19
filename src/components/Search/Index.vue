<template>
    <section class='search'>
        <InputBox/>
        <History v-show='!showResult' v-if='historyArr.length' :historyArr='historyArr'/>
        <Hot v-show='!showResult' v-if='hotArr.length' :hotArr='hotArr'/>
        <ul class='search-result' v-show='showResult'>
            <ResultItem v-for='item in resultArr' :result='item' :key='item.id'/>
        </ul>
    </section>
</template>

<script>
    import InputBox from './InputBox.vue'
    import History from './History.vue'
    import Hot from './Hot.vue'
    import ResultItem from './ResultItem.vue'
    import {mapState} from 'vuex'
    import {getHotSearch} from '@/api/search'
    export default {
        components: {
            InputBox,
            History,
            Hot,
            ResultItem
        },
        data () {
            return {
                hotArr: []
            }
        },
        computed: mapState({
            showResult: (state) => state.search.showResult,
            resultArr: (state) => state.search.resultArr,
            historyArr: (state) => state.search.historyArr
        }),
        created () {
            getHotSearch().then((res)=> {
                this.hotArr = res.data;
            }).catch(()=> {})
        }
    }
</script>

<style lang="scss">
    @import './index.scss'
</style>