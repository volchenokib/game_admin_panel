<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xl-9">
          <b-form>
            <b-form-group
              id="input-group-1"
              class="mr-sm-2"
              label="Game Title"
              label-for="inline-form-input-game-title"
            >
              <b-form-input
                id="game-form-input-game-title"
                v-model="form.title"
                class="mb-3"
                placeholder="please enter game title"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              class="mb-3"
              label="Game Cover URL"
              label-for="inline-form-input-game-cover"
            >
              <b-form-input
                id="inline-form-input-game-cover"
                placeholder="Game Cover URL"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              class="mr-sm-2"
              label="Game Description"
              label-for="inline-form-game-description"
            >
              <b-form-input
                id="game-form-input-game-description"
                v-model="form.description"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Game Description"
              ></b-form-input>
            </b-form-group>

            <b-button
              class="mt-4"
              type="submit"
              variant="primary"
              @click.prevent="addItem"
              >Add Game</b-button
            >
          </b-form>
        </div>
      </div>
    </div>

    <br />
    <h2 class="h2-custom">Game List</h2>
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

<style lang="scss" scoped>
  .h2-custom {
    font-family: $accent-font-family;
    font-size: 6rem;
  }
</style>
