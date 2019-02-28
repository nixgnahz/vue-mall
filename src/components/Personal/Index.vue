<template>
    <section class="person">
        <LoginMask v-if="showLogin"/>
        <div v-else>
            <ContactMask v-if="showContact" @change="changeContact"/>
            <UserInfo/>
            <OrderList/>
            <RowList/>
            <ColumnList @change="changeContact"/>
            <Recommend/>
            <BaseMenuHolder/>
        </div>
        <TabBar/>
    </section>
</template>

<script>
    import LoginMask from './LoginMask.vue'
    import ContactMask from './ContactMask.vue'
    import UserInfo from './UserInfo.vue'
    import OrderList from './OrderList.vue'
    import RowList from './RowList.vue'
    import ColumnList from './ColumnList.vue'
    import Recommend from '../Recommend/Index.vue'
    import BaseMenuHolder from '../Base/BaseMenuHolder.vue'
    import TabBar from '../Menu/Index.vue'
    import {getUserInfo} from '@/api/user.js'
    export default {
        name: 'Personal',
        components: {
            ContactMask,
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
                showLogin: 1,
                showContact: 0,
            }
        },
        async created () {
            const res = await getUserInfo()
            this.showLogin = 0
            this.$store.commit('setUserInfo', res.data)
        },
        methods: {
            changeContact () {
                this.showContact = !this.showContact
            }
        }
    }
</script>

<style lang="scss">
    @import "./index.scss"
</style>