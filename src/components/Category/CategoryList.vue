<template>
    <section>
        <div class="category-list" ref="parent">
            <ul class="category-menu" ref="menuWrapper">
                <li v-for="(item, index) in classArr" :class="[activeIndex == index ? 'active' : 'inactive']" :key="item.id" @click="changeMenu(index, $event)">{{item.title}}</li>
            </ul>
            <div class="category-content" ref="detailWrapper">
                <div>
                    <div class="lists" v-for="item_ in classArr" :key="item_.id">
                        <div class="list" v-for="(item, index) in item_.content" :key="item.id">
                            <div class="title">
                                <p class="line"></p>
                                <span>{{item.title}}</span>
                                <p class="line"></p>
                            </div>
                            <ul class="item">
                                <li v-for="itm in item_.content[index].list" :key="itm.id">
                                    <router-link :to="{name: 'result', params: {id: itm.id}}">
                                        <div class="cover" :style="{backgroundImage: `url(${itm.cover})`}"></div>
                                        <p>{{itm.title}}</p>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BaseMenuHolder/>
        <TabBar/>
    </section>
</template>

<script>
    const classArr = [
      {
        id: 1,
        title: '热门推荐',
        content: [
          {
            id: 1,
            title: '猜你喜欢',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 5,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          },
          {
            id: 2,
            title: '你可能还喜欢',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 5,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          },
          {
            id: 3,
            title: '精选推荐',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 5,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 6,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 7,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 8,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 9,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: '女装',
        content: [
          {
            id: 1,
            title: '夏装',
            list: [
              {
                id: 1,
                title: '夏季新品',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '连衣裙',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: 'T恤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '衬衫',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 5,
                title: '牛仔裤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          },
          {
            id: 2,
            title: '春秋装',
            list: [
              {
                id: 1,
                title: '短袖T恤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '雪纺衫',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '棉麻T恤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '吊带',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 5,
                title: '卫衣',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 6,
                title: '防晒衣',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          },
          {
            id: 3,
            title: '冬装',
            list: [
              {
                id: 1,
                title: '牛仔短裤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '休闲短裤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '背带裤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: '男装',
        content: [
          {
            id: 1,
            title: '夏装',
            list: [
              {
                id: 1,
                title: 'T恤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '休闲裤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '牛仔裤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '短裤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          },
          {
            id: 2,
            title: '春秋装',
            list: [
              {
                id: 1,
                title: '短袖T恤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '长袖T恤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '运动T恤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '衬衫',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          },
          {
            id: 3,
            title: '冬装',
            list: [
              {
                id: 1,
                title: '短裤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '休闲裤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '牛仔裤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '运动裤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 5,
                title: '九分裤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          }
        ]
      },
      {
        id: 4,
        title: '内衣内裤',
        content: [
          {
            id: 1,
            title: '热卖',
            list: [
              {
                id: 1,
                title: '内衣',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '文胸',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          },
          {
            id: 2,
            title: '女士',
            list: [
              {
                id: 1,
                title: '文胸',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '文胸套装',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '无钢圈文胸',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '蕾丝文胸',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          },
          {
            id: 3,
            title: '男士',
            list: [
              {
                id: 1,
                title: '男士内裤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '女士内裤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '情侣内裤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '莫代尔内裤',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          }
        ]
      },
      {
        id: 5,
        title: '女鞋',
        content: [
          {
            id: 1,
            title: '单鞋',
            list: [
              {
                id: 1,
                title: '单鞋',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '高跟鞋',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '帆布鞋',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '板鞋',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          },
          {
            id: 2,
            title: '凉鞋',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          }
        ]
      },
      {
        id: 6,
        title: '男鞋',
        content: [
          {
            id: 1,
            title: '凉鞋',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          },
          {
            id: 2,
            title: '运动鞋',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          }
        ]
      },
      {
        id: 7,
        title: '手表配饰',
        content: [
          {
            id: 1,
            title: '手表',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          },
          {
            id: 2,
            title: '戒指',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          }
        ]
      },
      {
        id: 8,
        title: '护肤彩妆',
        content: [
          {
            id: 1,
            title: '护肤品',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          },
          {
            id: 2,
            title: '化妆品',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          }
        ]
      },
      {
        id: 9,
        title: '个人护理',
        content: [
          {
            id: 1,
            title: '护理',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          },
          {
            id: 2,
            title: '个人卫生',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          }
        ]
      },
      {
        id: 10,
        title: '母婴',
        content: [
          {
            id: 1,
            title: '婴儿用品',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          },
          {
            id: 2,
            title: '孕妇用品',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          }
        ]
      },
      {
        id: 11,
        title: '手机',
        content: [
          {
            id: 1,
            title: '小米手机',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          },
          {
            id: 2,
            title: '红米手机',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          }
        ]
      },
      {
        id: 12,
        title: '电脑',
        content: [
          {
            id: 1,
            title: '苹果电脑',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          },
          {
            id: 2,
            title: '华硕电脑',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          }
        ]
      },
      {
        id: 13,
        title: '运动',
        content: [
          {
            id: 1,
            title: '运动器械',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          },
          {
            id: 2,
            title: '运动装备',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          }
        ]
      },
      {
        id: 14,
        title: '食品',
        content: [
          {
            id: 1,
            title: '零食',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          },
          {
            id: 2,
            title: '生鲜',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          }
        ]
      },
      {
        id: 15,
        title: '儿童',
        content: [
          {
            id: 1,
            title: '儿童玩具',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          },
          {
            id: 2,
            title: '儿童启蒙教育',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          },
          {
            id: 3,
            title: '儿童服装',
            list: [
              {
                id: 1,
                title: '小米8',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 2,
                title: '小米8 SE',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 3,
                title: '小米MIX 2S',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              },
              {
                id: 4,
                title: '小米Max 3',
                cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
              }
            ]
          }
        ]
      }
    ]
    import BScroll from 'better-scroll'
    import BaseMenuHolder from '../Base/BaseMenuHolder.vue'
    import TabBar from '../Menu/Index.vue'
    export default {
        components: {
            BaseMenuHolder,
            TabBar
        },
        data () {
            return {
                timer: null,
                contentList: [],
                classArr: classArr,
                listHeight: [],
                detailWrapperY: 0
            }
        },
        computed: {
            activeIndex () {
                for (let i = 0, l = this.listHeight.length; i < l; i++) {
                    const topHeight = this.listHeight[i]
                    const bottomHeight = this.listHeight[i + 1]
                    if (!bottomHeight || (this.detailWrapperY >= topHeight && this.detailWrapperY < bottomHeight)) {
                        return i
                    }
                }
                return 0
            }
        },
        created () {
            this.$nextTick(() => {
                this.timer = setTimeout(()=> {
                    this.calculateHeight()
                    this.initScroll()
                }, 500)
            })
        },
        destroyed () {
            if (this.timer) clearTimeout(this.timer)
            this.detailWrapper.off('scroll', this.handleScroll)
        },
        methods: {
            changeMenu (index, event) {
                if (!event._constructed) return
                const el = this.contentList[index]
                this.detailWrapper.scrollToElement(el, 300)
            },
            calculateHeight () {
                const menu = this.$refs.parent.querySelectorAll('.category-menu')
                const height = menu[0].clientHeight
                this.$refs.parent.style.height = height + "px"
                this.$refs.detailWrapper.style.height = height + "px"
                this.contentList = this.$refs.detailWrapper.querySelectorAll('.lists')
                let gap = 0
                this.listHeight = [gap]
                for (let i = 0; i < this.contentList.length; i++) {
                  gap += this.contentList[i].clientHeight
                  this.listHeight.push(gap)
                }
            },
            initScroll () {
                this.menuWrapper = new BScroll(this.$refs.menuWrapper, {
                  click: true
                })
                this.detailWrapper = new BScroll(this.$refs.detailWrapper, {
                  click: true,
                  probeType: 3
                })
                this.detailWrapper.on('scroll', this.handleScroll)
            },
            handleScroll (pos) {
                this.detailWrapperY = Math.abs(Math.round(pos.y))
            }
        }
    }
</script>