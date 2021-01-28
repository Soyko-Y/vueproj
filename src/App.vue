<template>
  <nav class="navbar">
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/news">Vue news</router-link>
    <router-link class="nav-link" to="/stencil">Stencil news</router-link>
    <router-link class="nav-link" to="/newsx">Vuex news</router-link>
    <router-link class="nav-link" to="/auth">Auth</router-link>
  </nav>

  <main>
    <router-view />
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  font: 62.5%/1.5 "Lucida Grande", "Lucida Sans", Tahoma, Verdana, sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 2.2rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.8rem;
}

h4 {
  font-size: 1.6rem;
}

h5 {
  font-size: 1.4rem;
}

p {
  font-size: 1.2rem;
}

section {
  padding: 1rem;
  border-radius: 1rem;
  margin: 1rem;
  text-align: center;
}

main {
  margin: 0 auto;
  width: 70vw;
}

.navbar {
  background: linear-gradient(#5476d6, #5497d6);
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 1;
}

.nav-link {
  font-size: 1.2rem;
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
}

.nav-link:hover {
  border-bottom: 4px solid #fff;
  transition: all 0.2s ease-out;
}

.btn {
  padding: 1em 2em;
  border-radius: 0.3em;
  outline: none;
  border: none;
  cursor: pointer;
}

.btn--primary {
  transition: all 0.3s ease-out;
  background-color: #fff;
  color: #242424;
  border: 1px solid #dcdcdc;
}

.btn--primary:hover {
  transition: all 0.3s ease-out;
  background-color: #dcdcdc;
  color: #242424;
  transition: 250ms;
}

.btn--outline {
  background-color: transparent;
  color: #fff;
  padding: 8px 20px;
  border: 1px solid #fff;
  transition: all 0.3s ease-out;
}

.btn--outline:hover {
  transition: all 0.3s ease-out;
  background: #fff;
  color: #242424;
  transition: 250ms;
}

.btn--medium {
  padding: 8px 20px;
  font-size: 18px;
  margin: 0.5rem;
}

.btn--view {
  background-color: #abdfff;
}

.btn--view:hover {
  background-color: #1e90ff;
  color: #fff;
}

.btn--delete {
  background-color: #ffc0cb;
}

.btn--delete:hover {
  background-color: #ff4040;
  color: #fff;
}

.btn--save {
  background-color: #98ff98;
}

.btn--save:hover {
  background-color: #00d200;
  color: #fff;
}

.btn--edit {
  background-color: #e2b9ff;
}

.btn--edit:hover {
  background-color: #8b00ff;
  color: #fff;
}

.btn:disabled {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: default;
}
</style>
