<template>
  <b-row>
    <b-col offset="1" cols="10">
      <vue-slider
        v-model="playersNumber"
        :min="2"
        :max="10"
      ></vue-slider>
      {{ txtPlayersNumber }} : {{ playersNumber }}
    </b-col>
    <b-col cols="12"> </b-col>
    <b-col cols="12" class="spinContainer" >
      <VueWinWheel  :buttontext="btnSpinText" :options="segments" 
      :question ="question" @finished="finished"
      ref="winWheel" />
    </b-col>
  </b-row>
</template>

<script>
import {
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
    this.language = languageService.getCurrentLanguage();

    this.segments = playerService.getSegments( this.playersNumber);

    const localisedTexts = componentService.getTexts()[this.language];

    this.btnPlayDescription = localisedTexts["btnPlay"];
    this.txtPlayersNumber = localisedTexts["txtPlayersNumber"];
    this.txtQuestionDescription = localisedTexts["txtQuestionDescription"];
    this.btnSpinText = localisedTexts["btnSpinText"];
    this.question = "text";
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

      segments: [],
    };
  },
  methods: {
    getRandomPlayer() {
      const players = Array.from(Array(this.playersNumber).keys());
      return players[Math.floor(Math.random() * this.playersNumber)] + 1;
    },
    finished(){
       this.question = questionService.getRandomQuestion(this.language);
    }
  },
  watch: {
    playersNumber: {
      immediate: false,
      deep: true,
      handler() {
        this.segments = playerService.getSegments(this.playersNumber);
        this.$refs.winWheel.assignNewSegments(this.segments);
        this.$refs.winWheel.resetWheel();
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
