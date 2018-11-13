<template>
    <BaseMask @hide="changeContact">
        <div class="contact-box" @click.stop>
            <p>客服热线：10106066</p>
            <p>客服工作时间 9：00-18：00</p>
            <div @click="changeContact">取消</div>
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
            changeContact () {
                this.$emit('change')
            }
        }
    }
</script>