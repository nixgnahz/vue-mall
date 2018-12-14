<template>
    <div>
        <BaseColumnItem v-for="item in recordArr" :key="item.id" :data="item">
            <div class="action">
                <img src="../../assets/image/icon/cart.png"/>
                <img src="../../assets/image/icon/delete.png"/>
            </div>
        </BaseColumnItem>
    </div>
</template>

<script>
    import BaseColumnItem from '../Base/BaseColumnItem.vue'
    export default {
        name: 'Records',
        components: {
            BaseColumnItem
        },
        data () {
            return {
                recordArr: [
                    {
                        id: 1,
                        cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
                        description: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
                        price: '3990',
                        sales: '53'
                    },
                    {
                        id: 2,
                        cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/4/0/6/a/5b480e10dbac3.jpeg',
                        description: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
                        price: '3990',
                        sales: '53'
                    },
                    {
                        id: 3,
                        cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/d/b/6/5b480e18a57f4.jpeg',
                        description: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
                        price: '3990',
                        sales: '53'
                    }
                ]
            }
        }
    }
</script>