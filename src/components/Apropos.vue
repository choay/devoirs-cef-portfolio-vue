<template>
    <div class="intro">
        <div class="img">
            <img src="/photo-min.png" alt="photo de profile">
        </div>
        <div class="presentation">
            <h1 id="about">Choayb Maghmouli</h1>
            <h3>Développeur Web, Web mobile.</h3>
            <p>Avec une expérience dans des laboratoires usines et entrepôt j’ai renforcé mes qualités humaines et professionnelles. Autonome, persévérant et fasciné par le développement et l'informatique, j'ai appris les bases de la creation des sites internet Html Css js en autodidacte .<br><br>

                L'apprentissage est la seule chose que l'esprit n'épuise jamais, ne craint jamais et ne regrette jamais.
                "Léonard de vinci"

            </p>
            
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.intro{
    
    display: flex;
    left: 0;
    right: 0;
    justify-content: space-evenly;
    align-items: center;
    height: 600px ;
    width: 100%;
    border-bottom: 1px solid black;
    background-color: rgb(127, 126, 136);
    background: linear-gradient(rgb(127, 126, 136),rgba(127, 126, 136, 0.2));
    color: antiquewhite;
    text-shadow: 1px 1px 2px rgb(131, 129, 154), 0 0 1em rgb(97, 97, 119), 0 0 0.2em rgb(127, 127, 187);
}
.presentation{
    width: 40%;
}
.img{
    width: 40%;
}
@media screen and (max-width: 600px) {
  .intro {
    flex-direction: column;
    align-items: center;
     
}
    .presentation{
        width: auto;
        padding: 10px;
        text-align: center;
        overflow: scroll;
    }
    .img{
        width: auto;
    }

}

</style>