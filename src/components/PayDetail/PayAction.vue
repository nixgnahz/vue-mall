<template>
    <div class="pay-action">
        <p>
            总价：
            <span>¥{{goodsTotal | formatPrice}}</span>
        </p>
        <div>
            <span>共{{goods.length}}件商品</span>
            <p class='pay-btn'>提交订单</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            goods: {
                isRequired: true
            }
        },
        computed: {
            goodsTotal () {
                let sum = 0
                this.goods.map((item) => {
                    sum += item.price * item.num
                })
                return sum
            }
        }
    }
</script>