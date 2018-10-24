<template>
    <a-card class="mine is-valid mine-shadow">
        <a-input addonBefore="DATA" v-model="inputData">
            <a-icon slot="prefix" type="file-text" />
        </a-input>       
        <div style="margin-top: 10px">HASH: {{hash}}</div>
        <div style="margin-top: 10px">previousHASH: {{previousHash}}</div>
        <div style="margin-top: 10px">TIME: {{timestamp}}</div>
        <span class="indexsp" style="font-size: 30px">
        BLOCK #{{index}}
        </span>
    </a-Card>
</template>

<script>

export function genesisblock() {
    return {
        index: 0,
        hash: "2C4CEB90344F20CC4C77D626247AED3ED530C1AEE3E6E85AD494498B17414CAC",
        previousHash:0,
        timestamp:new Date().toLocaleString(),
        data:"This is Genesis Block"
    }
}

export default {
    props: {
        index: Number,
        hash: String,
        previousHash: String,
        data: String,
        timestamp: String
    },
    data: function () {
        return { 
            inputData: this.data 
        }
    }
}


</script>

<style scoped>
@import '../Add/AddCard.css';
@import './Block.css';

</style>

