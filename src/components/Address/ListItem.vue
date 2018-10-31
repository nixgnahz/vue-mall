<template>
    <div class='address-list-item'>
        <div class='address-list-item-user'>
            <p class='address-list-item-user-name'>{{data.consignee}}</p>
            <p class='address-list-item-user-tel'>{{data.phone}}</p>
            <div class='address-list-item-user-label' v-if='data.tag'>
                <p>{{data.tag}}</p>
            </div>
        </div>
        <p class='address-list-item-address'>{{data.positionStr}}{{data.detailAddress}}</p>
        <div class='address-list-item-action'>
            <BaseChooseItem :selected='data.isDefault' @change='changeDefault'>
                <span>设为默认地址</span>
            </BaseChooseItem>
            <div class='address-list-item-action-edit'>
                <p @click='editAddress'>
                    <img src='../../assets/image/address/edit.png' />
                    <span>编辑</span>
                </p>
                <p @click='deleteAddress'>
                    <img src='../../assets/image/icon/delete.png' />
                    <span>删除</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseChooseItem from '../Base/BaseChooseItem.vue'
    export default {
        components: {
            BaseChooseItem
        },
        props: {
            data: {
                type: Object,
                isRequired: true
            }
        },
        methods: {
            deleteAddress () {
                this.$store.dispatch('deleteAddress', this.data.id)
            },
            editAddress () {
                this.$store.commit('changeEditFlag')
                this.$store.commit('changeAddress', this.data)
            },
            changeDefault () {
                this.$store.dispatch('changeDefault', this.data)
            }
        }
    }
</script>