<template>
    <video :src="mvURL" controls='controls'></video>
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

<style>

</style>