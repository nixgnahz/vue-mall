<template>
    <div class="address-edit">
        <div class="address-edit-input">
            <p>收货人</p>
            <input type="text" v-model="address.consignee"/>
        </div>
        <div class="address-edit-input">
            <p>手机号码</p>
            <input type="number" v-model="address.phone"/>
        </div>
        <div class="address-edit-input" @click="showAddress">
            <p>所在地区</p>
            <p v-if="address.positionStr">{{address.positionStr}}</p>
            <img src="../../assets/image/icon/enter.png" v-else/>
        </div>
        <textarea placeholder="请输入详细地址，如街道、门牌号、小区、楼栋号、单元室等" v-model="address.detailAddress"></textarea>
        <div class="address-edit-input" @click="showLabel">
            <p>标签</p>
            <p v-if="address.tag">{{address.tag}}</p>
            <img src="../../assets/image/icon/enter.png" v-else/>
        </div>
        <div class="address-btn save-btn" @click="saveAddress">保存</div>
        <transition name="slide-left">
            <Label v-if="labelFlag" @hideLabel="hideLabel"/>
        </transition>
        <transition name="slide-left">
            <Address v-if="addressFlag" @hideAddress="hideAddress"/>
        </transition>
    </div>
</template>

<script>
    import Label from './Label.vue'
    import Address from './Address.vue'
    export default {
        components: {
            Label,
            Address
        },
        data () {
            return {
                labelFlag: 0,
                addressFlag: 0
            }
        },
        computed: {
            address () {
                return this.$store.state.address.address
            }
        },
        methods: {
            showLabel () {
                this.labelFlag = 1;
            },
            hideLabel (tag) {
                this.labelFlag = 0;
                if (tag) this.address.tag = tag;
            },
            showAddress () {
                this.addressFlag = 1;
            },
            hideAddress (str, id) {
                this.addressFlag = 0;
                this.address.positionStr = str;
                this.address.position_id = id;
            },
            saveAddress () {
                for (let key in this.address) {
                    if (key === 'isDefault' || key === 'tag' || key === 'id') continue;
                    if (!this.address[key]) return;
                }
                let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
                if (!reg.test(this.address.phone)) return;
                if (this.address.id) {
                    this.$store.dispatch('editAddress', this.address)
                } else{
                    this.$store.dispatch('addAddress', this.address)
                }
            }
        }
    }
</script>