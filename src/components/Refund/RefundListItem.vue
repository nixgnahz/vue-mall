<template>
    <li>
        <div class="title">
            <p>订单编号 {{item.orderId}}</p>
            <span>已完成退款</span>
        </div>
        <div class="goods">
            <div class="cover" :style="{backgroundImage: `url(${item.goods.cover})`}"></div>
            <div class="info">
                <p class="desc">{{item.goods.description}}</p>
                <p class="param">{{item.goods.param.color}} {{item.goods.param.size}}</p>
            </div>
            <div class="price">
                <p>¥{{item.goods.price | formatPrice}}</p>
                <span>x{{item.goods.num}}</span>
            </div>
        </div>
        <div class="total">
            <span>共{{item.goods.num}}件商品</span>
            <span>退款金额 ¥{{item.goods.price | sumPrice(item.goods.num)}}</span>
        </div>
        <router-link class="detail-btn" :to="{name: 'refundDetail', params: {id: item.orderId}}">
            <div>退货详情</div>
        </router-link>
    </li>
</template>

<script>
    export default {
        props: ['item']
    }
</script>