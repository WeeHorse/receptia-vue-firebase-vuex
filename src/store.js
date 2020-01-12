import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 1. (HAVE) Här håller vi i vår data
    burgers: []
    // burgers: [
    //   {
    //     title: 'Original Not a burger',
    //     text: `This vegetarian, vegan and gluten-free mushroom burger recipe may just surprise you with how tasty it is. While mushrooms provide plenty of flavor and texture, the addition of pinto beans makes this veggie burger recipe high in fiber and protein too. There's not much to them, other than that! Just mash everything up together, form into patties, heat and serve!`,
    //     image: 'https://images.unsplash.com/photo-1532768641073-503a250f9754?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bceece29b062fe6d758ddfa2400c554c&auto=format&w=1024&q=80'
    //   },
    //   {
    //     title: 'Original Mushroom burger',
    //     text: `Mushrooms are surprisingly similar in taste and texture to meat when cooked, and this mushroom veggie burger recipe may just surprise you with how tasty it is. While mushrooms provide plenty of flavor and texture, the addition of pinto beans makes this recipe high in fiber and protein too. `,
    //     image: 'https://veryveganrecipes.com/wp-content/uploads/2015/12/how-to-make-vegan-portobello-mushroom-burger-recipe.png'
    //   }
    // ]
  },
  mutations: {
    // 3. (GOT) ta hand om resultatet, som vi nu lägger i state
    gotBurgersData(state, payload) {
      state.burgers = payload
      console.log('gotBurgersData', payload)
    },
  },
  actions: {
    // 2. (GET) starta en action för att t ex hämta data

    // vi hämtar ifrån en (lokal) fil
    async getBurgers({ commit }) {
      let response = await fetch('/data/burgers.json');
      if (response.ok) {
        let json = await response.json();
        console.log('getBurgers', json)
        commit('gotBurgersData', json);
      } else {
        alert("HTTP-Error: " + response.status);
      }
    },

    // vi hämtar ifrån firebase istället..
    async getLiveBurgers({ commit }) {
      let querySnapshot = await db.collection("recipies").get()
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        commit('gotBurgersData', doc.data());
      })
    }
  }
})
