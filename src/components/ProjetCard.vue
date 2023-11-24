<template>
    <div class="projet_card">
        <div class="project_img">
            <img class="imageProjet" :src="info_projet.url" :alt="info_projet.alt">
        </div>
        <h3>{{ info_projet.titre }}</h3>
   </div> 
</template>

<script setup>
    const props = defineProps(['info_projet'])
  
</script>

<style scoped>
    .projet_card{
        width: 25%;
        height: auto;
        padding: 6px;
        background-color: #f2f2f2;
    }
    .projet_card:hover{
        box-shadow: 3px 3px 5px rgb(126, 127, 136);
    }
    .imageProjet{
        background-size: cover;
        background-position: center;
        height: 150px;
        width: 100%;
    }
    
</style>