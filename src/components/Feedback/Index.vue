<template>
    <section class="feedback">
        <div class="feedback-box">
            <p class="feedback-title title">
                <span>意见与建议 (必填)</span>
                <span>{{detail.length}}/200</span>
            </p>
            <div class="desc">
                <textarea placeholder="请填写不少于10个字的问题描述" maxlength="200" v-model.trim="detail"></textarea>
            </div>
            <div class="feedback-pic">
                <p class="title">
                    <span>相关截图 (选填)</span>
                    <span>{{imgArr.length}}/3</span>
                </p>
                <div class="content">
                    <p @click="uploadImg">
                        <img src="../../assets/image/icon/add.png"/>
                    </p>
                    <div class="cover" v-for="(item, index) in imgArr" :key="index" :style="{backgroundImage: 'url(' + item + ')'}"></div>
                </div>
            </div>
        </div>
        <p class="tel-tip">请输入有效联系方式方便联系 (选填)</p>
        <div class="tel-input">
            <p>联系方式</p>
            <input type="text" placeholder="邮箱／手机号" v-model.trim="telephone"/>
        </div>
        <p :class="['submit-btn', active ? 'active' : 'inactive']" @click="submit">提交</p>
    </section>
</template>

<script>
    export default {
        data () {
            return {
                active: 0,
                telephone: '',
                imgArr: [],
                detail: ''
            }
        },
        watch: {
            detail (newVal) {
                if (newVal && newVal.length >= 10) {
                    this.active = 1
                } else{
                    this.active = 0
                }
            }
        },
        methods: {
            submit () {
                if (!this.active) return
            },
            uploadImg () {
                if (this.imgArr.length >= 3) return
                this.imgArr.push('http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg')
            }
        }
    }
</script>

<style lang="scss">
    @import "./index.scss"
</style>