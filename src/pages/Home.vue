<template>
  <section class="home m-4">
    <h1>Admin Panel</h1>
    <GameCard />
  </section>
</template>

<script>
  import GameCard from "../components/GameCard.vue";

  export default {
    name: "Home",
    components: {
      GameCard,
    },
  };
</script>
