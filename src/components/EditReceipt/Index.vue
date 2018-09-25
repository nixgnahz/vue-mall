<template>
    <section class='receipt-box'>
        <ReceiptList/>
        <div class='edit'>
            <div class='title'>
                <BaseChooseItem :selected='receiptType' @change='changeReceiptType(1)'>企业</BaseChooseItem>
                <BaseChooseItem :selected='!receiptType' @change='changeReceiptType(0)'>个人</BaseChooseItem>
            </div>
            <CompanyReceipt v-show='receiptType'/>
            <PersonReceipt v-show='!receiptType'/>
            <div class='receipt-btn inactive'>使用该抬头</div>
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
                receiptType: 1
            }
        },
        methods: {
            changeReceiptType (index) {
                if (this.receiptType == index) return;
                this.receiptType = index;
            }
        }
    }
</script>

<style lang="scss">
    @import './index.scss'
</style>