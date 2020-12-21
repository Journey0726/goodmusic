<template>
    <video :src="mvURL" controls='controls' class="video"></video>
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
        width: 500px;
    }
</style>