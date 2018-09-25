<template>
    <div class='person-row'>
       <router-link :to='{name: "ticket"}'>
          <img src='../../assets/image/person/tickets.png' />
          <p>优惠券</p>
       </router-link>
       <router-link :to='{name: "collect"}'>
          <img src='../../assets/image/person/collect.png' />
          <p>我的收藏</p>
        </router-link>
        <router-link :to='{name: "records"}'>
          <img src='../../assets/image/person/records.png' />
          <p>浏览记录</p>
        </router-link>
        <router-link :to='{name: "payback"}'>
          <img src='../../assets/image/person/payback.png' />
          <p>我的退款</p>
        </router-link>
    </div>
</template>

<script>

</script>