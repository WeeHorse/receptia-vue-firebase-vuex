<template>
  <article>
    <div class="intro text">
      <h2>Your source for good food!</h2>
      <div class="icons">
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      </div>
      <p><img :src="image" style="float:right;width:30vw;margin-left:2vw">We’re passionate about our food and take great care that what we serve every day is safe, great quality, offers choice and is produced in a responsible way. We use real, quality ingredients to elevate the taste of our food and the spirits of people who enjoy it all over the world. </p>
    </div>
  </article>
</template>
<script>
export default {
  data(){
    return {
      image: require('./../assets/cheesecake.jpeg')
    }
  }
}
</script>