<template>
    <div class="login-input">
        <div class="input-box">
            <input type="text" placeholder="请输入用户名" v-model.trim="account"/>
        </div>
        <div class="input-box">
            <input :type="showPassword ? 'text' : 'password'" placeholder="请输入密码" v-model.trim="password"/>
            <BaseSliderRadio @change="changePasswordType"/>
        </div>
        <LoginButton @login="login"/>
    </div>
</template>

<script>
    import BaseSliderRadio from '../Base/BaseSliderRadio.vue'
    import LoginButton from './LoginButton.vue'
    import {login} from '@/api/login.js'
    export default {
        components: {
            LoginButton,
            BaseSliderRadio
        },
        data () {
            return {
                showPassword: 0,
                account: '',
                password: ''
            }
        },
        methods: {
            changePasswordType () {
                this.showPassword = !this.showPassword
            },
            login () {
                if (!this.account) {
                    this.$store.dispatch('showToast', {
                        text: '请输入用户名',
                        duration: 1000
                    })
                    return
                }
                if (!this.password) {
                    this.$store.dispatch('showToast', {
                        text: '请输入密码',
                        duration: 1000
                    })
                    return
                }
                this.$store.commit('showLoad')
                  login({  
                    account: this.account,  
                    password: this.password  
                }).then(()=> {  
                    this.$router.replace('/person')
                    this.$store.commit('hideLoad')
                }).catch((res)=> {
                    this.$store.dispatch('showToast', {
                        text: '用户名或密码错误',
                        duration: 1000
                    })
                    this.$store.commit('hideLoad')
                })
            }
        }
    }
</script>