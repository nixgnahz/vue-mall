<template>
    <swiper :options="options" :not-next-tick="options.notNextTick">
        <swiper-slide v-for="item in swipers" :key="item.id">
            <router-link :to="{name: item.path, params: {id: item.id}}">
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