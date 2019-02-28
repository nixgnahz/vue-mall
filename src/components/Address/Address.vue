<template>
    <BaseMask>
        <div class="address-edit-position">
            <div class="address-edit-position-title">
                <span>配送至</span>
                <img src="../../assets/image/icon/close.png"  @click="hideAddress"/>
            </div>
            <div class="address-choice-detail">
                <p @click="changeMenu(index)" v-for="(item, index) in (position.length + 1)" :key="index" :class="{active: positionIndex == index}">{{position[index] ? position[index] : "请选择"}}</p>
            </div>
            <div class="choice">
                <div class="scroll-mask">
                  <ul class="level">
                      <li v-for="(item, index) in positionArr[positionIndex]" :key="item.id" @click="choosePosition(index)">
                          <span>{{item.name}}</span>
                          <img src="../../assets/image/address/choosed.png" v-if="item.id === positionId[positionIndex]"/>
                      </li>
                  </ul>
                </div>
            </div>
        </div>
    </BaseMask>
</template>

<script>
    import BaseMask from '../Base/BaseMask.vue'
    import getPosition from '@/api/position.js'
    export default {
        components: {
            BaseMask
        },
        data () {
            return {
                waitFlag: 1,
                positionArr: [],
                positionIndex: 0,
                positionId: [],
                position: []
            }
        },
        async created () {
            const res = await getPosition(1)
            this.positionArr.push(res.data)
        },
        methods: {
            changeMenu (index) {
                this.positionIndex = index
            },
            async choosePosition (index) {
                if (!this.waitFlag) return
                this.waitFlag = 0
                const id = this.positionArr[this.positionIndex][index].id
                const name = this.positionArr[this.positionIndex][index].name
                this.positionId.push(id)
                const res = await getPosition(id)
                this.waitFlag = 1
                if (res.data.length) {
                    this.positionArr = this.positionArr.slice(0, this.positionIndex + 1)
                    this.positionId = this.positionId.slice(0, this.positionIndex + 1)
                    this.position = this.position.slice(0, this.positionIndex)
                    this.position.push(name)
                    this.positionArr.push(res.data)
                    this.positionIndex++
                } else {
                    let str = ''
                    this.position.map((item)=> {
                        str += item
                    })
                    str += name
                    this.$emit('hideAddress', str, this.positionId[this.positionId.length - 1])
                }
            },
            hideAddress () {
                this.$emit('hideAddress')
            }
        }
    }
</script>