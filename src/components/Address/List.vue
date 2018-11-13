<template>
    <div class="address-list">
        <ListItem v-for="item in addressList" :data="item" :key="item.id"/>
        <div class="address-btn add-btn" @click="showEdit">
            <img src="../../assets/image/address/add.png" />
            <span>新建地址</span>
        </div>
    </div>
</template>

<script>
    import ListItem from './ListItem.vue'
    export default {
        components: {
            ListItem
        },
        computed: {
            addressList () {
                return this.$store.state.address.addressList
            }
        },
        created () {
            this.$store.dispatch('getAddressList')
        },
        methods: {
            showEdit () {
                this.$store.commit('changeEditFlag')
                this.$store.commit('changeAddress')
            }
        }
    }
</script>