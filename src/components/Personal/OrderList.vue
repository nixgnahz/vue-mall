<template>
    <div class='person-order'>
        <div class='person-order-title'>
            <p>我的订单</p>
            <div @click='change(0)'>
                <span>查看全部</span>
                <img src='../../assets/image/icon/enter.png' />
            </div>
        </div>
        <div class='person-order-list'>
            <div @click='change(1)'>
                <img src='../../assets/image/person/daifukuan.png' />
                <p>待付款</p>
            </div>
            <div @click='change(2)'>
                <img src='../../assets/image/person/daifahuo.png' />
                <p>待发货</p>
            </div>
            <div @click='change(3)'>
                <img src='../../assets/image/person/daishouhuo.png' />
                <p>待收货</p>
            </div>
            <div @click='change(4)'>
                <img src='../../assets/image/person/daipingjia.png' />
                <p>待评价</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            change (index) {
                this.$store.commit('changeActiveIndex', index)
                this.$router.push('./orders')
            }
        }
    }
</script>