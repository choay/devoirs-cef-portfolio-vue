<template>
<div v-if="show" class="output">
    <p>Votre message : "{{ messageEnvoyer }}" a été envoyé à : {{ email }}</p>
</div>
<div  v-if="!showError" class="output">    
    <p>Vous devez remplir tous les champs</p>
</div >
  <form action="" method="get" class="form-ex">
  <div class="form-ex">
    <label for="name">Enter votre Nom: </label>
    <input class="input" v-model="nom" type="text" name="name" id="name" autocomplete="off" required />
  </div>
  <div class="form-ex">
    <label for="objet">Objet: </label>
    <input class="input" v-model="objet" type="text" name="objet" id="objet" autocomplete="off" required />
  </div>
  <div class="form-ex">
    <label for="message">Entrez votre message: </label>
    <textarea class="input" v-model="messageEnvoyer" id="message"></textarea>
  </div>

  
  <div class="form-ex">
    <input class="btn" @click="submitForm" type="submit"/>
  </div>
</form>

</template>

<script setup>
import {ref} from 'vue'
let show = ref(false)
let showError = ref(true)

  const email = process.env.VUE_APP_EMAIL

  let messageEnvoyer = ''
  let objet = ''
  let nom = ''

  const submitForm = (e) => {
    if(messageEnvoyer=='' || objet ==''|| nom == ''){
      showError.value=false
    }else{
      show.value=true
    }
e.preventDefault();
}


</script>

<style scoped>
label {
  display: block;
  margin: 5px;
  padding: 6px;
}
.input{
  width: 40%;
  padding: 6px;
  border-radius: 5px;
}
form{
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  text-align: center;
  
}
.btn{
  padding: 7px;
  margin: 7px;
  color: antiquewhite;
  background-color : rgb(126,127,136);
  border-radius: 5px;
}
.btn:hover{
  background-color: #f2f2f2;
  color: black;
}
.output{
  background-color: #f2f2f2;
  text-align: center;
  padding: 6px;
}


</style>