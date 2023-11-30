<template>
  
    <nav class="nav_bar">
      <div>
        <a href="#"><img class="logo" src="../logo/logo.png" alt="logo"></a>
      </div>
      <a href="#" @click="toggle"  class="toggle-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
        <ul v-if="show">
          <li><a href="#about">à propos</a></li>
          <li><a href="#media">média social</a></li>
          <li><a href="#projet">projets</a></li>
          <li><a href="#formContact">Contact</a></li>
        </ul>
      </nav>
    
  
</template>

<script setup>
import {ref} from 'vue'
const show = ref(true)

function toggle(){
  show.value=!show.value
}


</script>

<style scoped>
 
  .nav_bar{
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    background-color:rgb(126, 127, 136) ;
    border-bottom: 1px solid black;
  }
  a:hover{
    background-color:rgb(174, 175, 186) ;
    font-weight: bold;
  }
  a:active{
    text-decoration: underline;
  }
.logo{
  margin-right: auto;
}
  .nav_bar ul{
    display: flex;
    margin:0;
    padding:0;
  }
  .nav_bar ul li a {
    padding: 1rem;
    display: block;
  }
  .toggle-button{
    position: absolute;
    display: none;
    top:.75rem;
    right: 1rem;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
  }
  .toggle-button .bar{
    height: 3px;
    width: 100%;
    background-color: aliceblue;
    border-radius: 10px;
  }
  @media screen and (max-width: 600px) {
   .toggle-button{
    display: flex;
   } 
   .nav_bar{
   flex-direction:column;
  }
  .nav_bar ul{
    width: 100%;
    flex-direction: column;

  }
  .nav_bar li {
    text-align: center;
  }
  .nav_bar li a {
    padding: 5rem 1rem;
  }
  .nav_bar.active{
    display: flex;
  }
}
</style>