<template>
    <div class='login-button' @click='login'>登录</div>
</template>

<script>
    export default {
        methods: {
            login () {
                this.$emit('login')
            }
        }
    }
</script>