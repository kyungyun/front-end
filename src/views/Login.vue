<template>
  <div class="main">
    <div class="header4">  
        <h1>ChainSmoke</h1>
        
    </div>
        <div class="header5">
        <LoginForm/>
        </div>
    
    
  </div>
</template>

<script>


import LoginForm from "@/components/Login/LoginForm.vue";

export default {
    components: {
        LoginForm
    }
}

</script>

