<!--<template>
    <div>
        <div class="main">
            <div class="header">
                <h2>BlockChain Demo</h2>
                <p>How to use</p>
            </div>
            <div class="header3">
                <div class="buttonsPersonal">
                    <div class="butleftPersonal">
                     <h3>Business</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


</script>

<style scoped>
</style>

2018-10-20 modify
--> 

<template>
    <div>
        <div class="main">
            <div class="header">
                <h2>BlockChain Demo</h2>
                <p>How to use</p>
            </div>
            <div class="header3">
                <div class="buttonsPersonal">
                    <div class="butleftPersonal">
                     <h3>Personal</h3>
                    </div>
                </div>
            </div>
        </div>        
    <div class="header2">
    
    <Block v-for="block in blockchain"
                :key="block.index"                 
                v-bind="block">
            </Block>
    
    <!--<Block v-for="block in blockchain"
                :key="block.index"                 
                v-bind="block"
                v-if="block.index>=1">
            </Block>-->
            <AddCard/>
            <button @click="RequestBlockchainSync">async</button>
         
    </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapState, mapActions } from "vuex";
import AddCard from "@/components/Add/AddCard.vue";
import Block from "@/components/Block/Block.vue";

export default {
    
    computed: {
        ...mapState({
            blockchain: state => state.blockchain
        })
    },
    components: {
        AddCard,
        Block
    },
    methods: mapActions([
        'RequestBlockchainSync'
    ]),
    
    
    created: function() {
        
        this.RequestBlockchainSync();
    }
}
</script>

<style scoped>
</style>