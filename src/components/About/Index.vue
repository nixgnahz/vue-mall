<template>
    <section class='about'>
        <img v-for='(item, index) in descArr' :src='item'/>
    </section>
</template>

<script>
    export default {
        data () {
            return {
                descArr: [
                    'https://p-h5.missfresh.cn/h5_file/2BEB6474AD0611A1658D7B0ADD0A42FD/statics/img/about-us-01.png',
                    'https://p-h5.missfresh.cn/h5_file/2BEB6474AD0611A1658D7B0ADD0A42FD/statics/img/about-us-02.png',
                    'https://p-h5.missfresh.cn/h5_file/2BEB6474AD0611A1658D7B0ADD0A42FD/statics/img/about-us-03.png'
                ]
            }
        }
    }
</script>

<style lang='scss' scoped>
    .about {
        img {
            width: 100%;
        }
    }
</style>