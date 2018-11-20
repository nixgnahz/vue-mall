<template>
    <div class="category-scroll" v-if="categoryArr">
        <ul class="home-category">
            <li v-for="(item, index) in categoryArr" @click="changeMenu(index)" :class="{active: index == activeIndex}" :key="item.id">
                <p>{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import {getCategory} from '@/api/category.js'
    export default {
        data () {
            return {
                activeIndex: 0,
                categoryArr: []
            }
        },
        created () {
            getCategory().then((res)=> {
                this.categoryArr = res.data
            })
        },
        methods: {
            changeMenu (index) {
                this.activeIndex = index
            }
        }
    }
</script>