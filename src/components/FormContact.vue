<template>
  <div class="container">
    <h2>Laissez votre message</h2>
    <hr>
  <form id="formContact" action="/action_page.php">
  <div class="row">
    <div class="col-25">
      <label for="fname">Nom</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="firstname" placeholder="votre nom..">
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="lname">Prénom</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="lastname" placeholder="Votre prénom..">
    </div>
  </div>
  
  <div class="row">
    <div class="col-25">
      <label for="subject">Message</label>
    </div>
    <div class="col-75">
      <textarea id="subject" name="subject" placeholder="Laissez votre message.." ></textarea>
    </div>
  </div>
  <br>
  <div class="row">
    <input type="submit" value="Envoyer">
  </div>
  </form>
</div>
</template>

<script setup>


</script>

<style scoped>
#formContact{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 20px;
  width: 75%;
  background-color:#fff;
  border: 1px solid black;
  box-shadow: 1px 1px 2px rgb(131, 129, 154), 0 0 1em rgb(97, 97, 119), 0 0 0.2em rgb(127, 127, 187);
  border-radius: 10px;
  padding: 20px;
}

input[type=text], textarea {
  width: 75%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {
  background-color: rgb(126, 127, 136);
  color: antiquewhite;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type=submit]:hover {
  background-color: rgb(82, 109, 175);
}

.container {
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row::after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 10px;
  }
  #subject{
    height: 50px;
  }
}
</style>