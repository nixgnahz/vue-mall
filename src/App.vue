<template>
  <div id="app">
    <BackTop v-show='backTopFlag' @backTop='changeBackTopFlag'/>
    <BaseToast v-if='toastFlag' :toast='toast'/>
    <BaseLoad v-if='loadFlag'/>
    <router-view/>
  </div>
</template>

<script>
    import BaseToast from '@/components/Base/BaseToast.vue'
    import BackTop from '@/components/Base/BackTop.vue'
    import BaseLoad from '@/components/Base/BaseLoad.vue'
    import {mapState} from 'vuex'
    export default {
        name: 'App',
        components: {
            BaseToast,
            BackTop,
            BaseLoad
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
                    this.backTopFlag = 1;
                }
                if (scrollTop <= screenHeight && this.backTopFlag) {
                    this.backTopFlag = 0;
                }
            }
        },
        computed: mapState({
            toastFlag: (state) => state.toast.toastFlag,
            toast: (state) => state.toast.toast,
            loadFlag: (state) => state.load.loadFlag
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
