<template>
    <div class="login-input">
        <div class="input-box">
            <input type="number" placeholder="请输入手机号" v-model.trim.number="phone"/>
        </div>
        <div class="input-box">
            <input type="number" placeholder="请输入验证码" v-model.trim.number="code"/>
            <p class="code-btn" v-if="showTimer">{{time}}秒后重新获取</p>
            <p class="code-btn" @click="getCode" v-else>获取验证码</p>
        </div>
        <LoginButton @login="login"/>
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
                showTimer: 0,
                time: 60,
                phone: '',
                code: '',
                interval: null
            }
        },
        destroyed () {
            if (this.interval) {
                clearInterval(this.interval)
            }
        },
        methods: {
            judgeInput () {
               let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
               if (!this.phone) {
                   this.$store.dispatch('showToast', {
                       text: '请输入手机号',
                       duration: 1000
                   })
                   return false;
               }
               if (!reg.test(this.phone)) {
                   this.$store.dispatch('showToast', {
                       text: '请输入正确的手机号',
                       duration: 1000
                   })
                   return false;
               }
               return true;
            },
            getCode () {
                if (!this.judgeInput()) return;
                this.$store.dispatch('showToast', {
                    text: '验证码发送成功',
                    duration: 1000
                })
                this.showTimer = 1;
                this.interval = setInterval(()=> {
                    this.time--;
                    if (this.time <= 0) {
                        clearInterval(this.interval)
                        this.showTimer = 0;
                        this.time = 60;
                    }
                }, 1000)
            },
            login () {
                if (!this.judgeInput()) return;
                if (!this.code) {
                    this.$store.dispatch('showToast', {
                        text: '请输入验证码',
                        duration: 1000
                    })
                    return;
                }
                this.$store.commit('showLoad')
            }
        }
    }
</script>