<template>
    <pull-to @bottom-pull="loadMore" @top-pull="refresh">
        <div class="top-tip" v-if="showTop">
            <img src="../../assets/image/icon/loading.png">
            <p>正在努力刷新...</p>
        </div>
        <slot></slot>
        <div class="bottom-tip" v-if="showBottom">
            <img src="../../assets/image/icon/loading.png">
            <p>正在努力加载...</p>
        </div>
    </pull-to>
</template>

<script>
    import PullTo from 'vue-pull-to'
    export default {
        name: 'BaseScroll',
        components: {
            PullTo
        },
        data () {
            return {
                showTop: 0,
                showBottom: 0
            }
        },
        methods: {
            loadMore (loaded) {
                this.showBottom = 1;
                this.$emit('loadMore',()=> {
                    this.showBottom = 0;
                })
            },
            refresh () {
                this.showTop = 1;
                this.$emit('refresh', ()=> {
                    this.showTop = 0;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .top-tip, .bottom-tip {
        font-size: 0.5rem;
        text-align: center;
        margin: 0.5rem auto;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        img {
            width: 0.8rem;
            height: 0.8rem;
            margin-right: 0.5rem;
            animation: spin 2s linear infinite;
        }
    }
</style>