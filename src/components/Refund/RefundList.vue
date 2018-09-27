<template>
    <section class='refund-list'>
        <ul v-if='refundList.length'>
            <RefundListItem v-for='item in refundList' :item='item' :key='item.id'/>
        </ul>
    </section>
</template>

<script>
    import RefundListItem from './RefundListItem.vue'
    export default {
        components: {
            RefundListItem
        },
        data () {
            return {
                refundList: [
                    {
                        id: 1,
                        orderId: 1802355125763245,
                        goods: {
                            cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/a/8/f/2/5b480e2033050.jpeg',
                            description: '粗跟漏趾凉鞋女百搭2018夏季新款韩版时尚一字扣带女鞋',
                            price: 15900,
                            num: 1,
                            param: {
                                color: '白色',
                                size: 'XL'
                            }
                        }
                    },
                    {
                        id: 2,
                        orderId: 1802334525763245,
                        goods: {
                            cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/a/8/f/2/5b480e2033050.jpeg',
                            description: '粗跟漏趾凉鞋女百搭2018夏季新款韩版时尚一字扣带女鞋',
                            price: 15900,
                            num: 2,
                            param: {
                                color: '白色',
                                size: 'XL'
                            }
                        }
                    }
                ]
            }
        }
    }
</script>