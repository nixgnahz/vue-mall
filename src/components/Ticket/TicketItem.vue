<template>
    <div class="ticket-item">
        <div class="ticket-item-money">
            <img src="../../assets/image/icon/ticket.png"/>
            <div class="content">
                <p class="money">¥<span>{{item.money}}</span></p>
                <p class="condition">{{item.condition}}</p>
            </div>
        </div>
        <div class="ticket-item-desc">
            <img src="../../assets/image/icon/ticket-box.png"/>
            <div class="content">
                <p class="name">{{item.name}}</p>
                <p class="time">{{item.startTime}} - {{item.endTime}}</p>
                <p class="tip">{{item.tip}}</p>
                <div class="use-btn">
                    <p>立即使用</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                isRequired: true
            }
        }
    }
</script>