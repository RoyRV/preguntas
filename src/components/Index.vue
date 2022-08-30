<template>
  <b-row>
    <b-col offset="1" cols="10">
      <vue-slider v-model="playersNumber" :min="2" :max="10"></vue-slider>
      {{txtPlayersNumber}} : {{playersNumber}}
    </b-col>
    <b-col cols="12">
      <b-button id="btnPlay" variant="outline-secondary" @click="showModal">
        {{ btnPlayDescription }}
      </b-button>

    </b-col>
  </b-row>
</template>

<script>
import { localStorageService, componentService } from "../services";

export default {
  name: "Home",
  created() {
    this.language = localStorageService.getKey("language");
    if (!this.language) this.language = "EN";
    const localisedTexts =  componentService.getTexts()[this.language];

    this.btnPlayDescription =localisedTexts["btnPlay"];
      this.txtPlayersNumber = localisedTexts["txtPlayersNumber"];
  },
  data() {
    return {
      language: "",
      btnPlayDescription: "",

      playersNumber : 2
    };
  },
  methods: {
showModal(){
  console.log("a");
}
  },
};
</script>

<style scoped>
#btnPlay {
  margin-top: 40px;
}
</style>
