<template>
  <article>
    <section id="blueberry-pie" v-bind:style="{ backgroundImage: 'url(' + blueberryPie.image + ')' }">
      <div class="image">
      </div>
      <div class="text">
        <h2>{{blueberryPie.title}}</h2>
        <div class="icons">
          <div>
            <i class="fas fa-stroopwafel"></i>
            <i class="fas fa-utensils"></i>
          </div>
          <div>
            <i class="fas fa-dollar-sign"></i>
            <i class="fas fa-dollar-sign"></i>
          </div>
          <div>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <p>{{blueberryPie.text}}</p>
      </div>
    </section>
  </article>
</template>

<script>
  export default{
    data(){
      return{
        blueberryPie:{
          title: 'Blueberry pie',
          text: `Blueberry pie is a pie with a blueberry filling. Blueberry pie is considered one of the easiest pies to make because it does not require pitting or peeling of fruit. It usually has a top and bottom crust. The top crust can be a circular crust but the pie can also have a crumble crust or no top crust at all. Blueberry pies are often eaten in the summertime because that is when blueberries are in season.`,
          image: 'https://images.unsplash.com/photo-1490323948794-cc6dde6e8f5b?ixlib=rb-0.3.5&s=0156b72692625eb21ab8e23d54bd37ec&auto=format&w=1024&q=80'
        }
      }
    }
  }
</script>
