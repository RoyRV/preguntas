import {
  localStorageService
} from "../services";

const languages = {
  "ES" : {
    "Description" : "Español"
  },
  "EN" : {
    "Description" : "Ingles"
  }
};

const getLanguages = () => {
  return languages;
};

const getCurrentLanguage = () => {
  let language = localStorageService.getKey("language");
  const languages = getLanguages();
  if (!language || languages[language] == undefined) {
    language = "EN";
    localStorageService.setKey("language", language);
  }
  return language;
}

export const languageService = {
  getLanguages,
  getCurrentLanguage
};
