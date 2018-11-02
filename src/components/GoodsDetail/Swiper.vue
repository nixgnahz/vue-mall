<template>
    <swiper :options="options" :not-next-tick="options.notNextTick">
        <swiper-slide v-for="item in swipers" :key="item.id">
            <img :src="item.cover" />
        </swiper-slide>
        <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
    </swiper>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        props: {
            swipers: {
                type: Array,
                default: ()=> []
            }
        },
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