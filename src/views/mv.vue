<template>
    <video :src="mvURL" controls='controls'  autoplay="autoplay" class="video"></video>
</template>

<script>
export default {
    name:'mv',
    props:{
        mvURL:{
            type:String,
            default:''
        }
    },
}
</script>

<style scoped>
    .video{
        width: 600px;
        z-index: 9;
    }

</style>