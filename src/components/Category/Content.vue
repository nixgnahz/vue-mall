<template>
    <div class='category-scroll'>
        <div class='category-content'>
            <div class='list' v-for='(item, index) in contentArr' :key='item.id'>
                <div class='title'>
                    <p class='line'></p>
                    <span>{{item.title}}</span>
                    <p class='line'></p>
                </div>
                <ul class='item'>
                    <li v-for='itm in contentArr[index].list' :key='itm.id'>
                        <router-link :to="{name: 'result', params: {id: itm.id}}">
                            <div class='cover' :style='{backgroundImage: "url(" + itm.cover + ")"}'></div>
                            <p>{{itm.title}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['contentArr']
    }
</script>