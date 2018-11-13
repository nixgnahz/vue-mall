<template>
    <div class="detail-description">
        <img :src="item" v-for="(item, index) in detailArr" :key="index"/>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                detailArr: [
                    'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/d/9/1/9/5b49a7987dc66.jpeg',
                    'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/9/0/a/7/5b49a78ca7ca3.jpeg',
                    'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/4/0/6/a/5b480e10dbac3.jpeg',
                    'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/a/8/f/2/5b480e2033050.jpeg'
                ]
            }
        }
    }
</script>