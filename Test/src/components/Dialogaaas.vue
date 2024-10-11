<script>
import { ref } from 'vue';

export default{
    expose: ['openDialog', 'closeDialog'],
    data(){
        return {
            dialog: HTMLDialogElement
        }
    },
    methods:{
        openDialog(){
            
        },
        closeDialog(){
            // this.dialog = false
        }
    }
}
</script>

<template>
<dialog ref="dialog">
    <slot />
</dialog>
</template>

<style scoped>
dialog{
    margin: 2em auto;
    position: absolute;
    z-index: 1000;
    width: 80%;
    height: 80%;
}
</style>