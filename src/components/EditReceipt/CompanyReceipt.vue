<template>
    <div class='company-receipt'>
        <div class='item'>
            <div>
                <span class='must'>*</span>
                <span>名称</span>
            </div>
            <input type='text' placeholder='请输入抬头名称' v-model='receipt.name'/>
        </div>
        <div class='item'>
            <div>
                <span class='must'>*</span>
                <span>税号</span>
            </div>
            <input type='text' placeholder='请输入纳税人识别号' v-model='receipt.code'/>
        </div>
        <div class='item'>
            <span>企业地址</span>
            <input type='text' placeholder='请输入企业注册地址' v-model='receipt.address'/>
        </div>
        <div class='item'>
            <span>电话号码</span>
            <input type='text' placeholder='请输入企业电话号码' v-model='receipt.tel'/>
        </div>
        <div class='item'>
            <span>开户银行</span>
            <input type='text' placeholder='请输入企业开户银行' v-model='receipt.bank'/>
        </div>
        <div class='item'>
            <span>银行账号</span>
            <input type='text' placeholder='请输入企业银行账号' v-model='receipt.account'/>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            receipt: {
                type: Object,
                isRequired: true
            }
        }
    }
</script>