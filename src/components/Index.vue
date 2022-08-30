<template>
  <b-row>
    <b-col offset="1" cols="10">
      <vue-slider v-model="playersNumber" :min="2" :max="10"></vue-slider>
      {{ txtPlayersNumber }} : {{ playersNumber }}
    </b-col>
    <b-col cols="12">
      <b-button
        id="btnPlay"
        variant="outline-secondary"
        @click="getRandomQuestion"
      >
        {{ btnPlayDescription }}
      </b-button>
    </b-col>
    <b-col cols="12">
      <div class="questionContainer">
        <span>{{ question }}</span>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import {
  localStorageService,
  componentService,
  questionService,
  languageService,
} from "../services";

export default {
  name: "Home",
  created() {
    this.language = localStorageService.getKey("language");
    var languages = languageService.getLanguages();

    if (!this.language || languages[this.language] == undefined) {
      this.language = "EN";
      localStorageService.setKey("language", this.language);
    }

    const localisedTexts = componentService.getTexts()[this.language];

    this.btnPlayDescription = localisedTexts["btnPlay"];
    this.txtPlayersNumber = localisedTexts["txtPlayersNumber"];
    this.txtQuestionDescription = localisedTexts["txtQuestionDescription"];
    this.question = "";
  },
  data() {
    return {
      language: "",
      playersNumber: 2,
      question: "",

      btnPlayDescription: "",
      txtPlayersNumber: "",
      txtQuestionDescription: "",
    };
  },
  methods: {
    getRandomQuestion() {
      const randomQue = questionService.getRandomQuestion(this.language);
      const randomPlayer = this.getRandomPlayer();
      this.question =
        this.txtQuestionDescription + randomPlayer + ": " + randomQue;
    },
    getRandomPlayer() {
      const players = Array.from(Array(this.playersNumber).keys());
      return players[Math.floor(Math.random() * this.playersNumber)] + 1;
    },
  },
};
</script>

<style scoped>
#btnPlay {
  margin-top: 40px;
}
.questionContainer {
  margin-top: 20px;
}
</style>
