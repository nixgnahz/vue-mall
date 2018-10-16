<template>
    <div class='login-input'>
        <div class='input-box'>
            <input type='number' placeholder='请输入手机号' v-model.trim.number='phone'/>
        </div>
        <div class='input-box'>
            <input type='number' placeholder='请输入验证码' v-model.trim.number='code'/>
            <p class='code-btn'>{{codeTip}}</p>
        </div>
        <LoginButton @login='login'/>
    </div>
</template>

<script>
    import LoginButton from './LoginButton.vue'
    export default {
        components: {
            LoginButton
        },
        data () {
            return {
                codeTip: '获取验证码',
                phone: '',
                code: ''
            }
        },
        methods: {
            login () {
                let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
                if (!this.phone) {
                    this.$store.dispatch('showToast', {
                        text: '请输入手机号',
                        duration: 1000
                    })
                    return;
                }
                if (!reg.test(this.phone)) {
                    this.$store.dispatch('showToast', {
                        text: '请输入正确的手机号',
                        duration: 1000
                    })
                    return;
                }
                if (!this.code) {
                    this.$store.dispatch('showToast', {
                        text: '请输入正确验证码',
                        duration: 1000
                    })
                    return;
                }
                this.$store.commit('showLoad')
                //通过手机号和短信验证码登录
            }
        }
    }
</script>