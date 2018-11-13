<template>
    <BaseScroll @loadMore="loadMore" @refresh="refresh">
        <div class="category-result">
            <div class="menu">
                <div>
                    <span @click="changeFilter(0)">综合</span>
                    <img src="../../assets/image/icon/asc.png" v-show="0 != filter" @click="changeFilter(0)"/>
                    <img src="../../assets/image/icon/asc-fill.png" v-show="0 == filter"/>
                </div>
                <div>
                    <span @click="changeFilter(1)">销量</span>
                    <img src="../../assets/image/icon/asc.png" v-show="1 != filter" @click="changeFilter(1)"/>
                    <img src="../../assets/image/icon/asc-fill.png" v-show="1 == filter"/>
                </div>
                <div @click="changeFilter(2)">
                    <span>价格</span>
                    <p>
                        <img src="../../assets/image/icon/asc.png" v-show="2 != filter"/>
                        <img src="../../assets/image/icon/asc-fill.png" v-show="2 == filter"/>
                        <img src="../../assets/image/icon/desc.png" v-show="3 != filter"/>
                        <img src="../../assets/image/icon/desc-fill.png" v-show="3 == filter"/>
                    </p>
                </div>
                <div @click="changeStyle">
                    <img class="style" src="../../assets/image/icon/row.png" v-show="!columnStyle"/>
                    <img class="style" src="../../assets/image/icon/column.png" v-show="columnStyle"/>
                </div>
            </div>
            <div class="result-list row" v-if="!columnStyle">
                <BaseRowItem class="list-item" v-for="(item, index) in resultArr" :key="index" :data="item"/>
            </div>
            <div class="result-list column" v-if="columnStyle">
                <BaseColumnItem class="list-item" v-for="(item, index) in resultArr" :key="index" :data="item"/>
            </div>
        </div>
    </BaseScroll>
</template>

<script>
    const resultArr = [
      {
        id: 1,
        cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
        description: '红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄',
        price: '109900',
        sales: 99
      },
      {
        id: 2,
        cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/d/b/6/5b480e18a57f4.jpeg',
        description: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
        price: '3990',
        sales: '53'
      },
      {
        id: 3,
        cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/d/c/9/9/5b481040c7f32.jpeg',
        description: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
        price: '3990',
        sales: '53'
      },
      {
        id: 4,
        cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
        description: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
        price: '3990',
        sales: '53'
      },
      {
        id: 5,
        cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/a/8/f/2/5b480e2033050.jpeg',
        description: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
        price: '3990',
        sales: '53'
      },
      {
        id: 6,
        cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/a/8/f/2/5b480e2033050.jpeg',
        description: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
        price: '3990',
        sales: '53'
      }
    ]
    import BaseRowItem from '../Base/BaseRowItem.vue'
    import BaseColumnItem from '../Base/BaseColumnItem.vue'
    import BaseScroll from '../Base/BaseScroll.vue'
    export default {
        components: {
            BaseRowItem,
            BaseColumnItem,
            BaseScroll
        },
        data () {
            return {
                filter: 0,
                columnStyle: 0,
                resultArr: resultArr
            }
        },
        destroyed () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
        },
        methods: {
            changeStyle (index) {
                this.columnStyle = !this.columnStyle;
            },
            changeFilter (index) {
                if (index <= 1) {
                    if (this.filter == index) return;
                    this.filter = index;
                    return;
                }
                switch (this.filter) {
                    case 2:
                        this.filter = 3;
                        break;
                    default:
                        this.filter = 2;
                }
            },
            refresh (loaded) {
                this.timer = setTimeout(()=> {
                    this.resultArr = resultArr;
                    loaded()
                }, 1500)
            },
            loadMore (loaded) {
                this.timer = setTimeout(()=> {
                    this.resultArr = this.resultArr.concat(resultArr);
                    loaded()
                }, 1500)
            }
        }
    }
</script>