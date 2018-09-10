<template>
    <BaseMask @hide='hide'>
        <div class='user-box' @click='(e)=> {e.stopPropagation()}'>
            <p class='user-box-title'>修改头像</p>
            <div class='user-box-content'>
                <p @click='showAlbum'>
                    <img src='../../assets/image/icon/album.png' />
                    <span>相册</span>
                </p>
                <p @click='takePhotos'>
                    <img src='../../assets/image/icon/photo.png' />
                    <span>拍照</span>
                </p>
            </div>
        </div>
    </BaseMask>
</template>

<script>
    import BaseMask from '../Base/BaseMask.vue'
    export default {
        components: {
            BaseMask
        },
        methods: {
            hide () {
                return this.$emit('hide')
            },
            showAlbum () {

            },
            takePhotos () {

            }
        }
    }
</script>