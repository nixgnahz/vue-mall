<template>
    <BaseMask @hide="hide">
        <div class="user-input" @click.stop>
            <input type="text" placeholder="请输入昵称" v-model="name"/>
            <button @click="saveName">保存</button>
            <p class="user-input-tip">4-20个字符，可由中英文、数字组成</p>
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
               name: ''
            }
        },
        methods: {
            hide () {
                this.$emit('hide')
            },
            saveName () {
                if (!this.name) return;
                this.$emit('change', this.name)
            }
        }
    }
</script>