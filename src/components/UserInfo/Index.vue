<template>
    <section class="user">
        <div class="user-item">
            <p class="user-item-title">头像</p>
            <div class="user-item-content" @click="changeAvatarFlag">
                <div class="avatar" :style="{backgroundImage: `url(${userInfo.avatar})`}"></div>
                <img src="../../assets/image/icon/enter.png" />
            </div>
        </div>
        <div class="user-item">
            <p class="user-item-title">用户名</p>
            <div class="user-item-content">{{userInfo.account}}</div>
        </div>
        <div class="user-item">
            <p class="user-item-title">昵称</p>
            <div class="user-item-content" @click="changeNameFlag">
                <span>{{userInfo.name}}</span>
                <img src="../../assets/image/icon/enter.png" />
            </div>
        </div>
        <div class="user-item">
            <p class="user-item-title">性别</p>
            <div class="user-item-content" @click="changeSexFlag">
                <span>{{genderWord}}</span>
                <img src="../../assets/image/icon/enter.png" />
            </div>
        </div>
        <ChangeAvatar v-show="showAvatar" @hide="changeAvatarFlag"/>
        <ChangeName v-show="showName" @hide="changeNameFlag" @change="changeName"/>
        <ChangeSex v-show="showSex" @hide="changeSexFlag"  @change="changeSex" :gender="gender"/>
    </section>
</template>

<script>
    import ChangeAvatar from './ChangeAvatar.vue'
    import ChangeName from './ChangeName.vue'
    import ChangeSex from './ChangeSex.vue'
    import {getGender} from '@/api/keyword.js'
    import {editUserInfo} from '@/api/user.js'
    export default {
        name: 'UserInfo',
        components: {
            ChangeAvatar,
            ChangeName,
            ChangeSex
        },
        computed: {
            userInfo () {
                return this.$store.state.user.userInfo
            }
        },
        data () {
            return {
                showAvatar: 0,
                showName: 0,
                showSex: 0,
                genderWord: '',
                gender: [],
                toast: {
                   text: '保存成功',
                   duration: 1000
                }
            }
        },
        created () {
            getGender().then((res)=> {
                this.gender = res.data
                this.exchangeSex()
            })
        },
        methods: {
            exchangeSex () {
                for (let i in this.gender) {
                    if (this.gender[i].id == this.userInfo.gender) {
                        this.genderWord = this.gender[i].name
                        return
                    }
                }
            },
            changeAvatarFlag () {
                this.showAvatar = !this.showAvatar
            },
            changeNameFlag () {
                this.showName = !this.showName
            },
            changeSexFlag () {
                this.showSex = !this.showSex
            },
            changeName (name) {
                if (this.userInfo.name == name) {
                    this.changeNameFlag()
                } else {
                    this.$store.commit('showLoad')
                    editUserInfo({
                        name: name
                    }).then(()=> {
                        this.$store.commit('hideLoad')
                        this.$store.dispatch('showToast', this.toast)
                        this.userInfo.name = name
                        this.changeNameFlag()
                        this.$store.commit('setUserInfo', this.userInfo)
                    })
                }
            },
            changeSex (sex) {
                if (this.userInfo.gender == sex) {
                    this.changeSexFlag()
                } else {
                    this.$store.commit('showLoad')
                    editUserInfo({
                        gender: sex
                    }).then(()=> {
                        this.$store.commit('hideLoad')
                        this.$store.dispatch('showToast', this.toast)
                        this.changeSexFlag()
                        this.userInfo.gender = sex
                        this.exchangeSex()
                        this.$store.commit('setUserInfo', this.userInfo)
                    })
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "./index.scss"
</style>