<template>
    <div class="projet_card" @click="showModal = true">
        <div class="project_img">
            <img class="imageProjet" :src="info_projet.url" :alt="info_projet.alt">
        </div>
        <h3>{{ info_projet.titre }} </h3>
    </div> 
   <ModaleProjet :show="showModal" :info_projet_modal="info_projet" @close="showModal = false" />
</template>

<script setup>
import { ref } from 'vue'
import ModaleProjet from './ModaleProjet.vue';
    const props = defineProps(['info_projet'])

    const showModal = ref(false)    
</script>

<style scoped>
    .projet_card{
        
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
        height: 200px;
    } 
</style>