<template>
    <div class='login-input'>
        <div class='input-box'>
            <input type='text' placeholder='请输入用户名' v-model.trim='account'/>
        </div>
        <div class='input-box'>
            <input :type='showPassword ? "text" : "password"' placeholder='请输入密码' v-model.trim='password'/>
            <BaseSliderRadio @change='changePasswordType'/>
        </div>
        <LoginButton @login='login'/>
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
                this.showPassword = this.showPassword ? 0: 1;
            },
            login () {
                if (!this.account || !this.password  ) return;
                  login({  
                    account: this.account,  
                    password: this.password  
                }).then(()=> {  
                    this.$router.replace('/person')
                })
            }
        }
    }
</script>