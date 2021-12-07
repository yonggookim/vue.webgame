<template>
    <div>
        <h1>{{result}}</h1>
        <form v-on:submit.prevent="onSubmitForm">
            <input type="text" ref="answer" v-model="value" maxlength="4">
            <button>입력!</button>
        </form>
        <div>시도 : {{}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value:'',
            result:'',
        }
    },
    methods:{
        onSubmitForm(){
            
        }
    }
}
</script>
<style>
    
</style>