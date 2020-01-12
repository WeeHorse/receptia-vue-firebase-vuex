<template>
  <main id="app">
    <header>
      <h1><router-link to="/">RECEPTIA</router-link></h1>
    </header>
    <article>
      <router-view/>
      <aside>
        <nav id="nav">
          <router-link to="/burgers">Burgers</router-link>
          <router-link to="/soups">Soups</router-link>
          <router-link to="/desserts">Desserts</router-link>
        </nav>
      </aside>
    </article>
  </main>
</template>

<style src="./App.css"></style>
