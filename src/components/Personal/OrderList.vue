<template>
    <div class='person-order'>
        <div class='person-order-title'>
            <p>我的订单</p>
            <router-link :to='{path: "./orders", query: {id: 0}}'>
                <span>查看全部</span>
                <img src='../../assets/image/icon/enter.png' />
            </router-link>
        </div>
        <div class='person-order-list'>
            <router-link :to='{path: "./orders", query: {id: 1}}'>
                <img src='../../assets/image/person/daifukuan.png' />
                <p>待付款</p>
            </router-link>
            <router-link :to='{path: "./orders", query: {id: 2}}'>
                <img src='../../assets/image/person/daifahuo.png' />
                <p>待发货</p>
            </router-link>
            <router-link :to='{path: "./orders", query: {id: 3}}'>
                <img src='../../assets/image/person/daishouhuo.png' />
                <p>待收货</p>
            </router-link>
            <router-link :to='{path: "./orders", query: {id: 4}}'>
                <img src='../../assets/image/person/daipingjia.png' />
                <p>待评价</p>
            </router-link>
        </div>
    </div>
</template>

<script>

</script>