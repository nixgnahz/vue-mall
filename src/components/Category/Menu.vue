<template>
    <ul class='category-menu'>
        <li v-for='(item, index) in menuArr' :class='[activeIndex == index ? "active" : "inactive"]' :key='item.id' @click='change(index)'>{{item.title}}</li>
    </ul>
</template>

<script>
    export default {
        props: ['menuArr', 'activeIndex'],
        methods: {
            change (index) {
                if (this.activeIndex == index) return;
                this.$emit('change', index)
            }
        }
    }
</script>