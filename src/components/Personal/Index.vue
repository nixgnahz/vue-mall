<template>
    <section class='person'>
        <LoginMask v-if='showLogin'/>
        <div v-else>
            <UserInfo/>
            <OrderList/>
            <RowList/>
            <ColumnList/>
            <Recommend/>
            <BaseMenuHolder/>
        </div>
        <TabBar/>
    </section>
</template>

<script>
    import LoginMask from './LoginMask.vue'
    import UserInfo from './UserInfo.vue'
    import OrderList from './OrderList.vue'
    import RowList from './RowList.vue'
    import ColumnList from './ColumnList.vue'
    import Recommend from '../Recommend/Index.vue'
    import BaseMenuHolder from '../Base/BaseMenuHolder.vue'
    import TabBar from '../Menu/Index.vue'
    import {getUserInfo} from '@/api/user.js'
    export default {
        components: {
            LoginMask,
            UserInfo,
            OrderList,
            RowList,
            ColumnList,
            Recommend,
            BaseMenuHolder,
            TabBar
        },
        data () {
            return {
                showLogin: 1
            }
        },
        created () {
            getUserInfo().then((res)=> {
                this.showLogin = 0;
                this.$store.commit('setUserInfo', res.data)
            })
        }
    }
</script>

<style lang="scss">
    @import './index.scss'
</style>