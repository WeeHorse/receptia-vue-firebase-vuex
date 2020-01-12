<template>
  <article>
    <section id="borscht" v-bind:style="{ backgroundImage: 'url(' + borscht.image + ')' }">
      <div class="image">
      </div>
      <div class="text">
        <h2>{{borscht.title}}</h2>
        <div class="icons">
          <div>
            <i class="fas fa-utensils"></i>
          </div>
          <div>
            <i class="fas fa-dollar-sign"></i>
            <i class="fas fa-dollar-sign"></i>
            <i class="fas fa-dollar-sign"></i>
          </div>
          <div>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <p>{{borscht.text}}</p>
      </div>
    </section>
  </article>
</template>

<script>
  export default{
    data(){
      return{
        borscht:{
          title: 'Borscht',
          text: `Borscht is a sour soup popular in several Eastern European cuisines, including Ukrainian, Russian, Polish, Lithuanian, Belarusian, Romanian, Ashkenazi Jewish and Armenian cuisines. The variety most commonly associated with the name in English is of Ukrainian origin and includes beetroots as one of the main ingredients, which gives the dish its distinctive red color.`,
          image: 'http://pdxmag.com/wp-content/uploads/2013/12/borscht-bowl-1-2.jpg'
        }
      }
    }
  }
</script>
