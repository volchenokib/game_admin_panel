<template>
  <div class="home">
    <hello-world greeting-text="Heading 1" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <GameCard />
  </div>
</template>

<script>
  import HelloWorld from "@/components/HelloWorld.vue";
  import GameCard from "../components/GameCard.vue";

  export default {
    name: "Home",
    components: {
      HelloWorld,
      GameCard,
    },
  };
</script>
