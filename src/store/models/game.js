import { Model } from "@vuex-orm/core";

export default class Game extends Model {
  static entity = "games";

  static fields() {
    return {
      gameTitle: this.attr(""),
      gameDescription: this.attr(""),
      gameCover: this.attr(""),
    };
  }
}
