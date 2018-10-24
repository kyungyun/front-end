<template>
  <a-button 
    class="mine-button animate"
    @click="click">
    <span> ADD NEW BLOCK </span>
  </a-button>

 

</template>

<script>

import AddInput from "@/components/Add/AddInput.vue";

/*
const confirmbox = () => {
    if(confirm("새로운 블록이 생성되었습니다") == true) {
       alert("승인되었습니다");
      }else{
        alert("취소되었습니다");
      }
}
*/
//const testsocket = new WebSocket("ws://13.125.183.243:3000");

//const test = new WebSocket("ws://13.125.183.243:3000");

export default {
    methods: {
       click: function() {
         /* if(confirm("새로운 임시블록이 생성되었습니다") == true) {
                if(confirm("임시 블록 생성되었습니다") == true ){
                  test.send(alert("메롱"));
                }else{
                  return;
                }
                this.$emit("click");
              }else{
              alert("임시 블록 생성이 취소되었습니다");
              }*/
        this.$emit("click")
    
      }
     
    }
  }
      //click: function() {
        //this.$emit("click")
</script>


<style scoped>
  @import 'AddButton.css';

  span {
    margin-left: "7.5px";
    color:"white";
  }
</style>