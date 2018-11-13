<template>
    <p class="switch">
        <input type="checkbox" id="show"/>
        <label for="show" @click="change"></label>
    </p>
</template>

<script>
    export default {
        name: 'BaseSliderRadio',
        methods: {
            change () {
                this.$emit('change')
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../index.scss";
    .switch {
        @include flex-row-center;
        input[type="checkbox"] {
            display: none;
        }
        input[type="checkbox"] + label {
            display: inline-block;
            width: 40px;
            height: 20px;
            position: relative;
            -webkit-transition: 0.3s;
            transition: 0.3s;
            margin: 0px 5px;
            box-sizing: border-box;
        }
        input[type="checkbox"] + label:after {
            content: "";
            display: block;
            position: absolute;
            left: 0px;
            top: 0px;
            width: 20px;
            height: 20px;
            -webkit-transition: 0.3s;
            transition: 0.3s;
            cursor: pointer;
        }
        #show:checked + label {
            background: #ECA9A7;
        }
        #show:checked + label:after {
            background: #D9534F;
        }
        #show:checked + label:after {
            left: calc(100% - 20px);
        }
        #show + label {
            background: #ddd;
            border-radius: 20px;
            box-shadow: 1px 1px 3px #aaa;
        }
        #show + label:after {
            background: #fff;
            border-radius: 50%;
            box-shadow: 1px 1px 3px #aaa;
        }
    }
</style>