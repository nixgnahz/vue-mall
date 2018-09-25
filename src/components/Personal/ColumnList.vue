<template>
    <div class='person-column'>
        <router-link :to='{name: "setting"}'>
            <p>
                <img src='../../assets/image/person/setting.png' />
                <span>我的设置</span>
            </p>
            <img src='../../assets/image/icon/enter.png' />
        </router-link>
        <router-link :to='{name: "address"}'>
            <p>
                <img src='../../assets/image/person/address.png' />
                <span>我的地址</span>
            </p>
            <img src='../../assets/image/icon/enter.png' />
        </router-link>
        <router-link :to='{name: "contact"}'>
            <p>
                <img src='../../assets/image/person/contact.png' />
                <span>联系客服</span>
            </p>
            <img src='../../assets/image/icon/enter.png' />
        </router-link>
        <router-link :to='{name: "question"}'>
            <p>
                <img src='../../assets/image/person/question.png' />
                <span>常见问题</span>
            </p>
            <img src='../../assets/image/icon/enter.png' />
        </router-link>
    </div>
</template>

<script>

</script>