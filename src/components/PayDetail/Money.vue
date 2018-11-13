<template>
    <div class="pay-money">
        <div class="pay-money-list">
            <router-link :to="{name: 'receipt'}">
                <p class="title">发票信息</p>
                <div class="item">
                    <p>不开发票</p>
                    <img src="../../assets/image/icon/enter.png"/>
                </div>
            </router-link>
        </div>
        <div class="pay-money-list">
            <p class="title">商品信息</p>
            <div class="item">
                <p>快递运费</p>
                <span>¥0.00</span>
            </div>
            <div class="item">
                <p>商品总额</p>
                <span>¥39.90</span>
            </div>
            <div class="item">
                <p>合计</p>
                <span>¥39.90</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>