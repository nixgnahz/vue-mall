<template>
    <router-link class='person-info' to='./user'>
        <div class='person-info-avatar' :style='{backgroundImage: "url(" + userInfo.avatar + ")"}'></div>
        <div class='person-info-user'>
            <p class='person-info-user-name'>{{userInfo.name}}</p>
            <p class='person-info-user-account'>登录账号：{{userInfo.account}}</p>
        </div>
    </router-link>
</template>

<script>
    export default {
        computed: {
            userInfo () {
                return this.$store.state.user.userInfo
            }
        }
    }
</script>