<template>
    
    <NavBar/>
    
    <Apropos/>
    
        <h3 id="projet">Mes projets</h3>
        <div class="projets">
            <ProjetCard v-for="(card, i) in dataProjet" :key="i" 
            :info_projet="card"/>
        </div>

        <h3 id="formContact">Evoyez votre message</h3>
        
    <FormContactVue/>

    <FooterView/>

</template>

<script setup>
    
    import { onMounted, ref } from 'vue'    
    import ProjetCard from '../components/ProjetCard.vue'
    import NavBar from '../components/NavBar.vue';
    import FooterView from '../components/FooterView.vue';
    import FormContactVue from '../components/FormContact.vue';
    import Apropos from '../components/Apropos.vue';
   
//donnees projets 

    const info = [
    {
        titre: 'CV en ligne',
        url: '/src/assets/cv.png',
        alt: 'photo du cv en ligne',
        techno: 'HTML, CSS',
        lienPdf: 'https://devoirs-one.vercel.app/',
        lienGithub: 'https://github.com/choay/devoirs.git'
    },
    {
        titre: 'Dynamiser un formulaire',
        url: '/src/assets/formulaire.png',
        alt: 'photo du formulaire dynamique',
        techno: 'JavaScript, DOM',
        lienPdf: 'https://dynamiser-un-espace-commentaire.vercel.app/',
        lienGithub: 'https://github.com/choay/DynamiserUnEspaceCommentaire.git'
    },
    {
        titre: 'Cahier des charge',
        url: '/src/assets/cdc.png',
        alt: 'photo du cahier des charge',
        techno: 'Word',
        lienPdf: '/public/CAHIER_DES_CHARGES.pdf',
        lienGithub: ''
    }
]
    
    class Projet {
        constructor(titre, url, alt, techno, lienPdf, lienGithub){
            this.titre = titre
            this.url = url
            this.alt = alt
            this.techno = techno
            this.lienPdf = lienPdf
            this.lienGithub = lienGithub
        }
    }
        let dataProjet = ref([]);

        const makeDataProjet = ()=> {
        for (const projet of info){
        const newProjet = new Projet(projet.titre, projet.url, projet.alt, projet.techno, projet.lienPdf, projet.lienGithub)
        dataProjet.value.push(newProjet)
        }
    }
    
onMounted(makeDataProjet)

</script>

<style scoped>
   

    h3{
        font-size: 2rem;
        text-align: center;
        padding: 6px;
    }
    .projets{
        display: flex;
        justify-content: space-evenly;
        background-color: #f2f2f2;
        padding: 10px;
    }
    @media screen and (max-width: 600px) {
        .projets{
            flex-direction: column;
            align-items: center;
        }
    }
</style>