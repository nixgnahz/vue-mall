<template>
    <BaseMask>
        <div class='detail-box'>
            <div class='service-title'>
                <p>服务说明</p>
                <img src='../../assets/image/icon/close.png' @click='hideService'/>
            </div>
            <div class='service-list'>
                <img src='../../assets/image/icon/choice.png'/>
                <p class='service-list-info'>
                    <span>7天无理由退货</span>
                    <span class='explain'>商家承诺7天无理由退货</span>
                </p>
            </div>
            <div class='service-list'>
                <img src='../../assets/image/icon/choice.png'/>
                <p class='service-list-info'>
                    <span>延误必赔</span>
                    <span class='explain'>享受快递延误险</span>
                </p>
            </div>
            <div class='service-list'>
                <img src='../../assets/image/icon/choice.png'/>
                <p class='service-list-info'>
                    <span>正品保障</span>
                </p>
            </div>
            <div class='service-list'>
                <img src='../../assets/image/icon/choice.png'/>
                <p class='service-list-info'>
                    <span>假一赔十</span>
                    <span class='explain'>若收到商品为假冒品牌，享受10倍赔偿</span>
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
        methods: {
            hideService () {
                this.$emit('change')
            }
        }
    }
</script>