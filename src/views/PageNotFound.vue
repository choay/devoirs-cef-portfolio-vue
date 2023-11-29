<!-- NotFound.vue -->
<template>
  <NavBar/>
    <div id="not-found">
    <p>Clickez içi pour revenir a l'acceuil</p>

      <router-link id="notFoundLink" to="/">home</router-link>
      
      <h1 id="#">404 - Page not found</h1>
      <img src="/src/assets/404.jpg" alt="erreur 404">
    </div>
    <FooterView/>
  </template>
  
  <script setup>
    import NavBar from '../components/NavBar.vue';
    import FooterView from '../components/FooterView.vue';

  </script>
  
  <style scoped>
    #not-found{
      display: flex;
      flex-direction: column;
      top:0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    h1 {
      font-size: 2em;
      color: #333;
    }
    #not-found img{
      background-size: cover;
      height: 600px;
    }
    #notFoundLink{
      text-align: center;
      width: 50px;
      padding: 7px;
      margin: 7px;
      color: antiquewhite;
      background-color : rgb(126,127,136);
      border-radius: 5px;
    }
  </style>
  