<template>
    <BaseMask>
        <div class="detail-box">
            <div class="service-title">
                <p>服务说明</p>
                <img src="../../assets/image/icon/close.png" @click="hideService"/>
            </div>
            <div class="service-list" v-for="item in serviceArr" :key="item.id">
                <img src="../../assets/image/icon/choice.png"/>
                <p class="service-list-info">
                    <span>{{item.title}}</span>
                    <span class="explain" v-if="item.desc">{{item.desc}}</span>
                </p>
            </div>
        </div>
    </BaseMask>
</template>

<script>
    import BaseMask from '../Base/BaseMask.vue'
    export default {
        components: {
            BaseMask
        },
        data () {
            return {
                serviceArr: [
                    {
                        id: 1,
                        title: '7天无理由退货',
                        desc: '商家承诺7天无理由退货'
                    },
                    {
                        id: 2,
                        title: '延误必赔',
                        desc: '享受快递延误险'
                    },
                    {
                        id: 3,
                        title: '正品保障'
                    },
                    {
                        id: 4,
                        title: '假一赔十',
                        desc: '若收到商品为假冒品牌，享受10倍赔偿'
                    }
                ]
            }
        },
        methods: {
            hideService () {
                this.$emit('change')
            }
        }
    }
</script>