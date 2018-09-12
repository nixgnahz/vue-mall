<template>
    <BaseMask>
        <div class='modal'>
            <p class='modal-title'>{{modal.title}}</p>
            <p class='modal-content'>{{modal.content}}</p>
            <div class='modal-btn'>
                <p @click='cancel' v-if='cancelFlag'>取消</p>
                <p @click='sure'>确定</p>
            </div>
        </div>
    </BaseMask>
</template>

<script>
    import BaseMask from './BaseMask.vue'
    export default {
        components: {
            BaseMask
        },
        props: {
            modal: {
                type: Object,
                isRequired: true
            },
            cancelFlag: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            cancel () {
                this.$emit('cancel')
            },
            sure () {
                this.$emit('sure')
            }
        }
    }
</script>

<style scoped lang='scss'>
    .mask-box {
        display: flex;
        align-items: center;
        justify-content: center;
        .modal {
            background: #fff;
            border-radius: 0.15rem;
            width: 12rem;
            text-align: center;
            &-title {
                color: #333;
                font-weight: 500;
                font-size: 0.8rem;
                padding-top: 0.75rem;
            }
            &-content {
                color: #666;
                font-size: 0.6rem;
                margin: 0.75rem 0px;
            }
            &-btn {
                display: flex;
                align-items: center;
                flex-direction: row;
                color: #44b549;
                font-weight: 400;
                justify-content: center;
                border-top: 1px solid #ebebeb;
                p {
                    flex: 1;
                    padding: 0.5rem 0px;
                    font-size: 0.7rem;
                    &:last-child {
                        border-left: 1px solid #ebebeb;
                    }
                }
            }
        }
    }

</style>