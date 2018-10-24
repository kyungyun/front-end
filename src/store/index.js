import Vue from 'vue';
import Vuex from 'vuex';
import createWebSocketPlugin from "./plugin/WebSockPlugin";

Vue.use(Vuex)


const websocketPlugin = createWebSocketPlugin("ws://"+location.hostname+":3000");
//const websocketPlugin = createWebSocketPlugin("ws://13.125.183.234:3000");
//const websocketPlugin = createWebSocketPlugin("ws://18.224.215.140:3000");

export default new Vuex.Store({
  state: {
    name: "",
    blockchain: [],
    connectedPeer: []
  },
  mutations: {
    setBlockchain(state, blockchain) {
        state.blockchain = blockchain;
    },
    addBlock(state, block) {
        state.blockchain.push(block);
    }
  },
  actions: {
    RequestBlockchainSync() {
    },
    RequestAddBlock(state, data) {
    },
    ResponseBlockchainSync({commit}, blockchain) {
        commit("setBlockchain", blockchain);
    },
    ResponseAddBlock(){

    }

  },
  getters: {
    getBlockChain: state => state.blockchain
  },
  plugins:[websocketPlugin]
});
