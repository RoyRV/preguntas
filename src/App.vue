<template>
  <div id="app">
    <b-container>
      <b-card class="b-card">
        <div id="content">
          <div class="flagContainer">
            <LangFlag
              class="flag"
              iso="en"
              @languageChanged="languageChanged"
            />
            <LangFlag
              class="flag"
              iso="es"
              @languageChanged="languageChanged"
            />
          </div>
        </div>
        <router-view :key="$route.fullPath" />
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { localStorageService } from "@/services";
import LangFlag from "@/components/LangFlag.vue";
export default {
  name: "App",
  components: {
    LangFlag,
  },
  methods: {
    languageChanged(language) {
      localStorageService.setKey("language", language);
      this.$router.go(0);
    },
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#content {
  position: relative;
}
#content .flagContainer {
  position: absolute;
  top: 0px;
  right: 0px;
}
.flag {
  margin: 0 5px 0 5px;
}
</style>
