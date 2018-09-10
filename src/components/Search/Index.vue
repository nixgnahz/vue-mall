<template>
    <section class='search'>
        <InputBox/>
        <History v-show='!showResult' v-if='historyArr.length' :historyArr='historyArr'/>
        <Hot v-show='!showResult' v-if='hotArr.length' :hotArr='hotArr'/>
        <Result v-show='showResult' :resultArr='resultArr'/>
    </section>
</template>

<script>
    import InputBox from './InputBox.vue'
    import History from './History.vue'
    import Hot from './Hot.vue'
    import Result from './Result.vue'
    import {mapState} from 'vuex'
    import {getHotSearch} from '@/api/search'
    export default {
        components: {
            InputBox,
            History,
            Hot,
            Result
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