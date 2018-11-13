<template>
    <section class="setting">
        <div class="setting-list">
            <router-link :to="{name: 'user'}">
                <p>账号管理</p>
                <img src="../../assets/image/icon/enter.png" />
            </router-link>
            <router-link :to="{name: 'address'}">
                <p>地址管理</p>
                <img src="../../assets/image/icon/enter.png" />
            </router-link>
        </div>
        <div class="setting-list">
            <router-link :to="{name: 'feedback'}">
                <p>问题反馈</p>
                <img src="../../assets/image/icon/enter.png" />
            </router-link>
            <router-link :to="{name: 'question'}">
                <p>常见问题</p>
                <img src="../../assets/image/icon/enter.png" />
            </router-link>
            <router-link :to="{name: 'about'}">
                <p>关于我们</p>
                <img src="../../assets/image/icon/enter.png" />
            </router-link>
        </div>
        <button class="logout-btn" @click="logout">退出当前账号</button>
        <BaseModal :modal="modal" v-if="modalFlag" @cancel="cancel" @sure="sure"/>
    </section>
</template>

<script>
    import BaseModal from '../Base/BaseModal.vue'
    import {logout} from '@/api/login.js'
    export default {
        components: {
            BaseModal
        },
        data () {
            return {
                modalFlag: false,
                modal: {}
            }
        },
        methods: {
            cancel () {
                this.modalFlag = false;
            },
            sure () {
                this.$store.commit('showLoad')
                logout().then(()=> {
                    this.modalFlag = false;
                    this.$store.commit('hideLoad')
                    this.$store.commit('setUserInfo', {})
                    this.$router.replace('./person')
                })
            },
            logout () {
                this.modalFlag = true;
                this.modal = {
                    title: '温馨提示',
                    content: '确定要退出当前帐号？'
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "./index.scss";
</style>