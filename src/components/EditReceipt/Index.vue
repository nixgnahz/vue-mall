<template>
    <section class="receipt-box">
        <ReceiptList/>
        <div class="edit">
            <div class="title">
                <BaseChooseItem :selected="receiptType" @change="changeReceiptType(1)">企业</BaseChooseItem>
                <BaseChooseItem :selected="!receiptType" @change="changeReceiptType(0)">个人</BaseChooseItem>
            </div>
            <CompanyReceipt v-show="receiptType" :receipt="company"/>
            <PersonReceipt v-show="!receiptType" :receipt="person"/>
            <div :class="['receipt-btn', active ? 'active' : 'inactive']" @click="saveReceipt">使用该抬头</div>
        </div>
    </section>
</template>

<script>
    import BaseChooseItem from '../Base/BaseChooseItem.vue'
    import ReceiptList from './ReceiptList.vue'
    import CompanyReceipt from './CompanyReceipt.vue'
    import PersonReceipt from './PersonReceipt.vue'
    export default {
        components: {
            BaseChooseItem,
            ReceiptList,
            CompanyReceipt,
            PersonReceipt
        },
        data () {
            return {
                active: 0,
                receiptType: 1,
                company: {
                    name: '',
                    code: '',
                    address: '',
                    tel: '',
                    bank: '',
                    account: ''
                },
                person: {
                    name: ''
                }
            }
        },
        watch: {
            'company.name' (newVal) {
                if (newVal && this.company.code) {
                    this.active = 1
                } else{
                    this.active = 0
                }
            },
            'company.code' (newVal) {
                if (newVal && this.company.name) {
                    this.active = 1
                } else{
                    this.active = 0
                }
            },
            'person.name' (newVal) {
                if (newVal) {
                    this.active = 1
                } else{
                    this.active = 0
                }
            },
            receiptType (newVal) {
                if ((newVal && this.company.name && this.company.code) || (!newVal && this.person.name)) {
                    this.active = 1
                } else{
                    this.active = 0
                }
            }
        },
        methods: {
            changeReceiptType (index) {
                if (this.receiptType == index) return
                this.receiptType = index
            },
            saveReceipt () {
                if (!this.active) return
                if (this.receiptType) {
                    this.saveCompany()
                } else{
                    this.savePerson()
                }
            },
            saveCompany () {},
            savePerson () {}
        }
    }
</script>

<style lang="scss">
    @import "./index.scss"
</style>