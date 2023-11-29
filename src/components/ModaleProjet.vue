<template>
    <div class="bloc_modal" v-if="show">

        <div class="overlay" @click="$emit('close')">
        </div>    

        <div class="modal_card">
                <button class="btn" @click="$emit('close')">X</button>
                <h3>{{ info_projet_modal.titre }}</h3>
                <p>Technologies utilisés: {{ info_projet_modal.techno }}</p>
                <p>Visitez : <a :href="info_projet_modal.lienPdf" target="_blank">{{ info_projet_modal.lienPdf }}</a></p>
                <p>Lien GitHub: <a :href="info_projet_modal.lienGithub" target="_blank">{{ info_projet_modal.lienGithub }}</a></p>
        
     
        </div>  
    </div>
</template>

<script setup>
    const props = defineProps(['show','info_projet_modal'])
   
</script>

<style scoped>
.bloc_modal{
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.overlay{
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
} 
.modal_card{
    background-color: aliceblue;
    padding: 50px;
    position: fixed;
    top: 30%;
    width: 70%;
}
.modal_card p{
    padding: 6px;
}
.modal_card h3{
    margin: 10px;
}
.modal_card a{
    color: black;
}
.modal_card a:hover{
    text-decoration: underline;
}
.btn{
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 6px;
    background-color: brown;
    color: rgb(248, 250, 251);
    border-radius: 2px;
}

</style>