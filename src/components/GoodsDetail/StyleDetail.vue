<template>
    <BaseMask>
        <div class="detail-box">
            <div class="style-title">
                <div class="style-title-cover" style="background-image: url(http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg)"></div>
                <div class="style-title-info">
                    <p class="price">¥45.00</p>
                    <p class="stock">库存4923</p>
                    <p class="tip">选择颜色尺寸</p>
                </div>
                <img src="../../assets/image/icon/close.png" @click="hideStyle"/>
            </div>
            <div class="style-list">
                <p class="style-list-title">颜色</p>
                <ul>
                    <li v-for="(item, index) in colorArr" :key="index" @click="changeColor(index)" :class="[colorIndex == index ? 'active' : 'inactive']">{{item}}</li>
                </ul>
            </div>
            <div class="style-list">
                <p class="style-list-title">尺码</p>
                <ul>
                    <li v-for="(item, index) in sizeArr" :key="index" @click="changeSize(index)" :class="[sizeIndex == index ? 'active' : 'inactive']">{{item}}</li>
                </ul>
            </div>
            <p class="sure-btn" @click="submitStyle">确定</p>
        </div>
    </BaseMask>
</template>

<script>
    import BaseMask from '../Base/BaseMask.vue'
    export default {
        components: {
            BaseMask
        },
        data () {
            return {
                colorArr: ['黑色+深灰+藏蓝+浅灰', '灰色+深灰+深蓝+黑色', '藏蓝+天蓝+咖啡+浅灰', '藏蓝+天蓝+咖啡+浅灰', '浅灰+深绿+咖啡+黑色'],
                sizeArr: ['L(尺码偏小，拍大一码)', 'XL(尺码偏小，拍大一码)', '2XL(尺码偏小，拍大一码)', '3XL'],
                colorIndex: 1,
                sizeIndex: 2
            }
        },
        methods: {
            hideStyle () {
                this.$emit('change')
            },
            changeColor (index) {
                if (this.colorIndex == index) return;
                this.colorIndex = index;
            },
            changeSize (index) {
                if (this.sizeIndex == index) return;
                this.sizeIndex = index;
            },
            submitStyle () {
                this.$emit('change')
            }
        }
    }
</script>