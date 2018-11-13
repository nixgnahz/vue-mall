<template>
    <BaseMask>
        <div class="address-edit-label">
            <img class="close" src="../../assets/image/icon/close.png" @click="hideLabel"/>
            <div class="address-edit-label-item">
                <input type="text" placeholder="请输入自定义标签，不超过5个字" maxlength="5" v-model="label"/>
                <img src="../../assets/image/address/choosed.png" v-show="activeIndex === 0"/>
            </div>
            <div class="address-edit-label-item" @click="changeLabel(1)">
                <p>
                    <img src="../../assets/image/address/house.png" />
                    <span>家</span>
                </p>
                <img src="../../assets/image/address/choosed.png" v-show="activeIndex === 1"/>
            </div>
            <div class="address-edit-label-item" @click="changeLabel(2)">
                <p>
                    <img src="../../assets/image/address/company.png" />
                    <span>公司</span>
                </p>
                <img src="../../assets/image/address/choosed.png" v-show="activeIndex === 2"/>
            </div>
            <div class="address-edit-label-item" @click="changeLabel(3)">
                <p>
                    <img src="../../assets/image/address/school.png" />
                    <span>学校</span>
                </p>
                <img src="../../assets/image/address/choosed.png" v-show="activeIndex === 3"/>
            </div>
            <div class="save-btn" @click="saveLabel">完成</div>
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
                activeIndex: 1,
                label: ''
            }
        },
        watch: {
            label: function (val) {
                if (val && this.activeIndex) {
                    this.activeIndex = 0
                }
            }
        },
        methods: {
            saveLabel () {
                switch (this.activeIndex) {
                    case 1:
                        this.label = '家'
                        break
                    case 2:
                        this.label = '公司'
                        break
                    case 3:
                        this.label = '学校'
                        break
                }
                this.$emit('hideLabel', this.label)
            },
            hideLabel () {
                this.$emit('hideLabel')
            },
            changeLabel (index) {
                this.activeIndex = index
            }
        }
    }
</script>