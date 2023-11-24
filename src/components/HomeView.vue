<template>
    <NavBar/>
    <Apropos/>
    <h2>Mes projets</h2>
    <div class="projets">
    <ProjetCard v-for="(card, i) in dataProjet" :key="i" :info_projet="card"
    @click="showModal = true"/>
    </div>
    
    <FormContactVue/>
    <ModaleProjet :show="showModal" @close="showModal=false"/>
    <FooterView/>
</template>

<script setup>
    import { onMounted, ref } from 'vue'    
    import ProjetCard from './ProjetCard.vue';
    import NavBar from './NavBar.vue';
    import FooterView from './FooterView.vue';
    import FormContactVue from './FormContact.vue';
    import Apropos from './Apropos.vue';
//modal
    import ModaleProjet from './ModaleProjet.vue';
    const showModal = ref(false) 
//donnees projets card
    const info = [
    {
        titre: 'CV en ligne',
        url: '/src/assets/cv.png',
        alt: 'photo du cv en ligne'
    },
    {
        titre: 'Dynamiser un formulaire',
        url: '/src/assets/formulaire.png',
        alt: 'photo du formulaire dynamique'
    },
    {
        titre: 'Cahier des charge',
        url: '/src/assets/cdc.png',
        alt: 'photo du cahier des charge'
    }
]
    
    class Projet {
        constructor(titre, url, alt){
            this.titre = titre
            this.url = url
            this.alt = alt
        }
    }
        let dataProjet = ref([]);

        const makeDataProjet = ()=> {
        for (const projet of info){
        const newProjet = new Projet(projet.titre, projet.url, projet.alt)
        dataProjet.value.push(newProjet)
        }
    }
    
onMounted(makeDataProjet)

const infoModal = [
    {
        titre: 'CV en ligne',
        techno: '/src/assets/cv.png',
        lienPdf: 'photo du cv en ligne',
        lienGithub: '#'
    },
    {
        titre: 'CV en ligne',
        techno: '/src/assets/cv.png',
        lienPdf: 'photo du cv en ligne',
        lienGithub: '#'
    },{
        titre: 'CV en ligne',
        techno: '/src/assets/cv.png',
        lienPdf: 'photo du cv en ligne',
        lienGithub: '#'
    }
]
class ProjetModal {
        constructor(titre, techno, lienPdf, lienGithub){
            this.titre = titre
            this.techno = techno
            this.lienPdf = lienPdf
            this.lienGithub = lienGithub
        }
    }
        let dataProjetModal = ref([]);

        const makeDataProjetModal = ()=> {
        for (const projetModal of infoModal){
        const newProjetModal = new ProjetModal(projetModal.titre, projetModal.techno, projetModal.lienPdf, projetModal.lienGithub)
        dataProjetModal.value.push(newProjetModal)
        }
    
    }
onMounted(makeDataProjetModal)

</script>

<style scoped>
    .projets{
        display: flex;
        justify-content: space-evenly;
        background-color: #f2f2f2
    }
    @media screen and (max-width: 600px) {
        .projets{
            flex-direction: column;
            align-items: center;
        }
    }
</style>