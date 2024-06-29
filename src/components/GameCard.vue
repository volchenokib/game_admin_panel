<template>
  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <center>
      <div
        style="width: 70%; height: 60px  margin-bottom: 20px;  margin-top: 100px;"
      >
        <label for="">Game Title</label>
        <input v-model="form.title" />
        <label for="">Game Cover URL</label>
        <input v-model="form.url" />
        <label for="">Game Description</label>
        <input v-model="form.price" /><br /><br />
        <button class="btn-primary" style="border-radius: 12%" @click="addItem">
          Add Game
        </button>
      </div>
    </center>

    <br />
    <h2>Game List</h2>
    <div class="row">
      <div v-for="game in games" :key="game.id" class="col-md-4">
        <div class="card" style="width: 18rem">
          <img :src="game.gameCover" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ game.gameTitle }}</h5>
            <p class="card-text">{{ game.gameDescription }}</p>
            <a href="#" class="btn btn-primary">Play</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Game from "../store/models/game";

  export default {
    data() {
      return {
        form: {
          title: "",
          cover: "",
          description: "",
        },
      };
    },

    computed: {
      games: () => Game.all(),
    },
    methods: {
      addItem() {
        const gameData = [
          {
            gameTitle: this.form.title,
            gameCover: this.form.cover,
            gameDescription: this.form.description,
          },
        ];
        Game.insert({ data: gameData });
      },
    },
  };
</script>
