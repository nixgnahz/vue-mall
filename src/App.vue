<template>
  <div id="app">
    <BackTop v-show='backTopFlag' @backTop='changeBackTopFlag'/>
    <BaseToast v-if='toastFlag' :toast='toast'/>
    <router-view/>
  </div>
</template>

<script>
    import BaseToast from '@/components/Base/BaseToast.vue'
    import BackTop from '@/components/Base/BackTop.vue'
    import {mapState} from 'vuex'
    export default {
        name: 'App',
        components: {
            BaseToast,
            BackTop
        },
        data () {
            return {
                backTopFlag: 0
            }
        },
        created () {
            let screenHeight = document.documentElement.clientHeight || document.body.clientHeight;
            window.onscroll = () => {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if (scrollTop > screenHeight && !this.backTopFlag) {
                    console.log(1)
                    this.backTopFlag = 1;
                }
                if (scrollTop <= screenHeight && this.backTopFlag) {
                    console.log(0)
                    this.backTopFlag = 0;
                }
            }
        },
        computed: mapState({
            toastFlag: (state) => state.toast.toastFlag,
            toast: (state) => state.toast.toast
        }),
        methods: {
            changeBackTopFlag () {
                this.backTopFlag = 0;
            }
        }
    }
</script>

<style>
    @import './app.scss'
</style>
