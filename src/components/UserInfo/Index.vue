<template>
    <section class='user'>
        <div class='user-item'>
            <p class='user-item-title'>头像</p>
            <div class='user-item-content' @click='changeAvatarFlag'>
                <div class='avatar' :style='{backgroundImage: "url(" + userInfo.avatar + ")"}'></div>
                <img src='../../assets/image/icon/enter.png' />
            </div>
        </div>
        <div class='user-item'>
            <p class='user-item-title'>用户名</p>
            <div class='user-item-content'>{{userInfo.account}}</div>
        </div>
        <div class='user-item'>
            <p class='user-item-title'>昵称</p>
            <div class='user-item-content' @click='changeNameFlag'>
                <span>{{userInfo.name}}</span>
                <img src='../../assets/image/icon/enter.png' />
            </div>
        </div>
        <div class='user-item'>
            <p class='user-item-title'>性别</p>
            <div class='user-item-content' @click='changeSexFlag'>
                <span>{{genderWord}}</span>
                <img src='../../assets/image/icon/enter.png' />
            </div>
        </div>
        <button class='save-btn'>保存设置</button>
        <ChangeAvatar v-show='showAvatar' @hide='changeAvatarFlag'/>
        <ChangeName v-show='showName' @hide='changeNameFlag' @change='changeName'/>
        <ChangeSex v-show='showSex' @hide='changeSexFlag'  @change='changeSex' :gender='gender'/>
    </section>
</template>

<script>
    import ChangeAvatar from './ChangeAvatar.vue'
    import ChangeName from './ChangeName.vue'
    import ChangeSex from './ChangeSex.vue'
    import {getGender} from '@/api/keyword.js'
    export default {
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
                gender: []
            }
        },
        created () {
            getGender().then((res)=> {
                this.gender = res.data;
                this.exchangeSex()
            })
        },
        methods: {
            exchangeSex () {
                for (var i in this.gender) {
                    if (this.gender[i].id == this.userInfo.gender) {
                        this.genderWord = this.gender[i].name;
                        return;
                    }
                }
            },
            changeAvatarFlag () {
                this.showAvatar = this.showAvatar ? 0 : 1;
            },
            changeNameFlag () {
                this.showName = this.showName ? 0 : 1;
            },
            changeSexFlag () {
                this.showSex = this.showSex ? 0 : 1;
            },
            changeName (name) {
                this.userInfo.name = name;
                this.changeNameFlag()
            },
            changeSex (sex) {
                console.log(sex)
                this.userInfo.gender = sex;
                this.exchangeSex()
                this.changeSexFlag()
            }
        }
    }
</script>

<style lang="scss">
    @import './index.scss'
</style>