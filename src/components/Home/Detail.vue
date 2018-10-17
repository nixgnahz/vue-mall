<template>
    <div class='detail-list'>
        <BaseRowItem v-for='item in detailArr' :data='item' :key='item.id'/>
    </div>
</template>

<script>
    const detailArr = [
        {
          id: 1,
          cover: "http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg",
          description: "仍然是搭载高通骁龙845 年度旗舰处理器 / AI超感光双摄，DxO百分相机 / 艺术品般陶瓷机身／人工智能／高清全屏／大内存",
          name: "蒲公英手机7S",
          price: "2999.00",
          sales: 1935
        },
        {
          id: 2,
          cover: "http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg",
          description: "仍然是搭载高通骁龙845 年度旗舰处理器 / AI超感光双摄，DxO百分相机 / 艺术品般陶瓷机身／人工智能／高清全屏／大内存",
          name: "蒲公英手机7S",
          price: "2999.00",
          sales: 1935
        },
        {
          id: 3,
          cover: "http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg",
          description: "仍然是搭载高通骁龙845 年度旗舰处理器 / AI超感光双摄，DxO百分相机 / 艺术品般陶瓷机身／人工智能／高清全屏／大内存",
          name: "蒲公英手机7S",
          price: "2999.00",
          sales: 1935
        },
        {
          id: 4,
          cover: "http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg",
          description: "仍然是搭载高通骁龙845 年度旗舰处理器 / AI超感光双摄，DxO百分相机 / 艺术品般陶瓷机身／人工智能／高清全屏／大内存",
          name: "蒲公英手机7S",
          price: "2999.00",
          sales: 1935
        },
        {
          id: 5,
          cover: "http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg",
          description: "仍然是搭载高通骁龙845 年度旗舰处理器 / AI超感光双摄，DxO百分相机 / 艺术品般陶瓷机身／人工智能／高清全屏／大内存",
          name: "蒲公英手机7S",
          price: "2999.00",
          sales: 1935
        },
        {
          id: 6,
          cover: "http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg",
          description: "仍然是搭载高通骁龙845 年度旗舰处理器 / AI超感光双摄，DxO百分相机 / 艺术品般陶瓷机身／人工智能／高清全屏／大内存",
          name: "蒲公英手机7S",
          price: "2999.00",
          sales: 1935
        }
    ]
    import BaseRowItem from '../Base/BaseRowItem.vue'
    export default {
        components: {
            BaseRowItem
        },
        data () {
            return {
                detailArr: detailArr
            }
        }
    }
</script>