<template>
    <swiper :options="options" :not-next-tick="options.notNextTick">
        <swiper-slide v-for="item in swipers" :key="item.id">
            <router-link :to="{name: 'activity', params: {id: item.id}}">
                <img :src="item.cover" />
            </router-link>
        </swiper-slide>
        <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
    </swiper>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        props: ['swipers'],
        components: {
            swiper,
            swiperSlide
        },
        data () {
            return {
                options: {
                    autoplay: true,
                    pagination: {
                        el: ".swiper-pagination",
                        bulletActiveClass: 'dot_active',
                        bulletClass: 'dot'
                    },
                    notNextTick: false
                }
            }
        }
    }
</script>

<style lang='scss'>
    .swiper-container {
        img {
            width: 100%;
        }
        .dot {
            display: inline-block;
            width: 8px;
            height: 8px;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 4px;
            margin: 0px 0.15rem;
        }
        .dot_active {
            width: 20px;
        }
    }
</style>