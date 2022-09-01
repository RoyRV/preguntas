<template>
  <b-row>
    <b-col cols="12">
      <b-row>
        <b-col cols="12">
          <!-- <b-img :src="'~/assets/cancha.png'" fluid ></b-img> -->
          <img src="../assets/cancha.png" height="50px" />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <h1 id="txtTitle">{{ txtTitleDescription }}</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <Index />
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>


<script>
import {
  componentService,
  languageService,
} from "../services";
import Index from "@/components/Index.vue";

export default {
  name: "Home",
  components: {
    Index,
  },
  created() {
    this.language = languageService.getCurrentLanguage();
    this.txtTitleDescription =
      componentService.getTexts()[this.language]["txtTitle"];
  },
  data() {
    return {
      language: "",
      txtTitleDescription: "",
    };
  },
};
</script>

<style scoped>
#txtTitle {
  margin-top: 10px;
}
</style>