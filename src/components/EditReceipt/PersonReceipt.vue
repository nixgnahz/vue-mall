<template>
    <div class='person-receipt'>
        <div class='item'>
            <div>
                <span class='must'>*</span>
                <span>名称</span>
            </div>
            <input type='text' placeholder='请输入抬头名称' v-model='receipt.name'/>
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