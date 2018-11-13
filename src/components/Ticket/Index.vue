<template>
    <section class="ticket">
        <p class="expire">您有<span>{{expire}}</span>张优惠券即将过期</p>
        <TicketItem v-for="item in ticketArr" :item="item" :key="item.id"/>
        <p class="over">没有更多了～</p>
        <div class="ticket-tip">
            <span>查看历史优惠券</span>
            <p></p>
            <span>优惠券说明</span>
        </div>
    </section>
</template>

<script>
    import TicketItem from './TicketItem.vue'
    export default {
        components: {
            TicketItem
        },
        data () {
            return {
                expire: 1,
                ticketArr: [
                    {
                        id: 1,
                        money: 5,
                        condition: '满25可用',
                        name: '电子产品抵扣券',
                        tip: '全场电子产品通用',
                        startTime: '2018-09-01',
                        endTime: '2018-10-12'
                    },
                    {
                        id: 2,
                        money: 8,
                        condition: '满35可用',
                        name: '零食抵扣券',
                        tip: '部分零食可以',
                        startTime: '2018-10-09',
                        endTime: '2018-10-19'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import "./index.scss";
</style>