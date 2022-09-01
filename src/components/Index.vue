<template>
  <b-row>
    <b-col offset="1" cols="10">
      <vue-slider
        v-model="playersNumber"
        :min="2"
        :max="10"
        :tooltip="'always'"
      ></vue-slider>
      {{ txtPlayersNumber }} : {{ playersNumber }}
    </b-col>
    <b-col cols="12"> </b-col>
    <b-col cols="12" class="spinContainer">
      <VueWinWheel :segments="options" :buttontext="btnSpinText" />
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
  playerService,
} from "../services";
import VueWinWheel from "@/components/VueWinWheel.vue";

export default {
  name: "Home",
  components: {
    VueWinWheel,
  },
  created() {
    this.language = localStorageService.getKey("language");
    var languages = languageService.getLanguages();

    if (!this.language || languages[this.language] == undefined) {
      this.language = "EN";
      localStorageService.setKey("language", this.language);
    }

    this.options = playerService.getSegments(this.language, this.playersNumber);

    const localisedTexts = componentService.getTexts()[this.language];

    this.btnPlayDescription = localisedTexts["btnPlay"];
    this.txtPlayersNumber = localisedTexts["txtPlayersNumber"];
    this.txtQuestionDescription = localisedTexts["txtQuestionDescription"];
    this.btnSpinText = localisedTexts["btnSpinText"];
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
      btnSpinText: "",

      options: [],
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
  watch: {
    playersNumber: {
      immediate: false,
      deep: true,
      handler() {
        this.options = playerService.getSegments(
          this.language,
          this.playersNumber
        );
      },
    },
  },
};
</script>

<style scoped>
#btnPlay {
  margin-top: 40px;
}
.questionContainer,
.spinContainer {
  margin-top: 20px;
}
</style>
