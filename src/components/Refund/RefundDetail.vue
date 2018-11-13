<template>
    <div class="refund-detail">
        <div class="status">
            <p>退款成功</p>
            <p>2018-7-27 19:49</p>
        </div>
        <div class="money">
            <p>退款总金额</p>
            <p>¥21.21</p>
        </div>
        <div class="info">
            <p class="title">退款信息</p>
            <router-link :to="{name: 'detail', params: {id: 1}}">
                <div class="goods">
                    <div class="cover" style="background-image: url(http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/a/8/f/2/5b480e2033050.jpeg)"></div>
                    <div class="desc">
                        <p>粗跟漏趾凉鞋女百搭2018夏季新款韩版时尚一字扣带女鞋</p>
                        <p>红色 XL</p>
                    </div>
                </div>
            </router-link>
            <div class="order">
                <p>退款原因：版本／批次／颜色／容量等与商品描述不符</p>
                <p>退款金额：¥21.21</p>
                <p>申请数量：1</p>
                <p>申请时间：2018-7-27 19:49</p>
                <p>退款编号：10902134825342</p>
            </div>
        </div>
        <div class="address-info">
            <p class="title">商品寄回地址</p>
            <p class="tel">
                <span>客退组</span>
                <span>400-6788-999</span>
            </p>
            <p>江苏省昆山市丁山湖镇双马路1号普洛斯物流园A1库唯品会华东物流中心</p>
        </div>
        <div class="user-info">
            <p>联系人：张欣</p>
            <p>联系方式：181****1234</p>
        </div>
        <div class="btn-holder"></div>
        <div class="delete-btn">
            <p>删除订单</p>
        </div>
    </div>
</template>

<script>

</script>