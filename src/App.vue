<template>
  <div id="app">
    <div id="nav">
      <router-link class="link" to="/">Typography</router-link> |
      <router-link class="link" to="/about">Icons</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: $body-font-family;
  font-size: $font-size-root;
}

.h1 {
  font-weight: bold;
  color: $primary;
}

.ul {
  list-style-type: none;
  padding: 0;
}

.li {
  display: inline-block;
  margin: 0 10px;
}

.link {
  color: $accent;
}

.custom-headline {
  font-family: Stalemate;
  font-size: 3rem;
  font-weight: 400;
}

#nav {
  padding: 30px;

  .link {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: $accent;
    }
  }
}
</style>
