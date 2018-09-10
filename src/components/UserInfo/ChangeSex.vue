<template>
    <BaseMask @hide='hide'>
        <div class='user-box' @click='(e)=> {e.stopPropagation()}'>
            <p class='user-box-title'>修改性别</p>
            <div class='user-box-content'>
                <p v-for='item in gender' :key='item.id' @click='setSex(item.id)'>
                    <span>{{item.name}}</span>
                </p>
            </div>
        </div>
    </BaseMask>
</template>

<script>
    import BaseMask from '../Base/BaseMask.vue'
    export default {
        props: {
            gender: {
                isRequired: true,
                type: Array
            }
        },
        components: {
            BaseMask
        },
        methods: {
            hide () {
                return this.$emit('hide')
            },
            setSex (sex) {
                this.$emit('change', sex)
            }
        }
    }
</script>