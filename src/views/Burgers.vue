<template>
  <article>
    <section
      v-for="burger in burgers"
      v-bind:key="burger.title"
      v-bind:style="{ backgroundImage: 'url(' + burger.image + ')' }"
    >
      <div class="image"></div>
      <div class="text">
        <h2>{{burger.title}}</h2>
        <div class="icons">
          <div>
            <i class="fas fa-apple-alt"></i>
            <i class="fas fa-utensils"></i>
          </div>
          <div>
            <i class="fas fa-dollar-sign"></i>
          </div>
          <div>
            <i class="far fa-star"></i>
          </div>
          <i class="far fa-clock"></i>
        </div>
        <p>{{burger.text}}</p>
      </div>
    </section>
  </article>
</template>

<script>

  import {db} from '../my-firebase'

  // console.log('recipies', db.ref('recipies'));

  // // on change
  // db.ref('recipies').on('value', function(snapshot) {
  //   console.log(snapshot.val());
  // });

  // // on init
  // db.ref('recipies').once('value').then(function(snapshot) {
  //   console.log(snapshot.val());
  // });

  export default{

    data(){
      return{
        //burgers: [
          // {
          //       title: 'Not a burger',
          //       text: `This vegetarian, vegan and gluten-free mushroom burger recipe may just surprise you with how tasty it is. While mushrooms provide plenty of flavor and texture, the addition of pinto beans makes this veggie burger recipe high in fiber and protein too. There's not much to them, other than that! Just mash everything up together, form into patties, heat and serve!`,
          //       image: 'https://images.unsplash.com/photo-1532768641073-503a250f9754?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bceece29b062fe6d758ddfa2400c554c&auto=format&w=1024&q=80'
          // },
          // {
          //       title: 'Mushroom burger',
          //       text: `Mushrooms are surprisingly similar in taste and texture to meat when cooked, and this mushroom veggie burger recipe may just surprise you with how tasty it is. While mushrooms provide plenty of flavor and texture, the addition of pinto beans makes this recipe high in fiber and protein too. `,
          //       image: 'https://veryveganrecipes.com/wp-content/uploads/2015/12/how-to-make-vegan-portobello-mushroom-burger-recipe.png'
          // }
        //]
      }
    },
    computed: {
      burgers(){
        return this.$store.state.burgers;
      }
    },
    created(){
      // db.collection("recipies").get().then((querySnapshot) => {
      //   querySnapshot.forEach((doc) => {
      //       console.log(doc.data());
      //       // doc.data().image = require(doc.data().image);
      //       this.burgers.push(doc.data())
      //   });
      // });
    }
  }
</script>
