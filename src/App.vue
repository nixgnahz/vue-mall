<template>
  <div id="app">
    <BaseToast v-if='toastFlag' :toast='toast'/>
    <router-view/>
  </div>
</template>

<script>
    import BaseToast from '@/components/Base/BaseToast.vue'
    import {mapState} from 'vuex'
    export default {
        name: 'App',
        components: {
            BaseToast
        },
        computed: mapState({
            toastFlag: (state) => state.toast.toastFlag,
            toast: (state) => state.toast.toast
        })
    }
</script>

<style>
    @import './app.scss'
</style>
