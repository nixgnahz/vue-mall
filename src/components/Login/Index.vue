<template>
    <section class="login">
        <img class="login-logo" src="../../assets/image/logo.png" />
        <div class="login-menu">
            <router-link :to="{name: 'password'}" replace>
               <span>密码登录</span>
            </router-link>
            <router-link :to="{name: 'message'}" replace>
               <span>短信登录</span>
            </router-link>
        </div>
        <router-view></router-view>
    </section>
</template>

<script>
    export default {
        name: 'Login'
    }
</script>

<style lang="scss">
    @import "./index.scss"
</style>