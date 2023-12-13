import {
  getCharacters,
  getCharacterById,
  showCharacters,
} from "./generics/getCharacters";

getCharacters()
  .then((resp) => {
    localStorage.setItem("characters", JSON.stringify(resp));
    showCharacters();    
  })
  .catch((err) => console.error(err))
  .finally(() => console.log("Fin de peticion"));

getCharacterById(1)
  .then((resp) => localStorage.setItem("SpecificChar", JSON.stringify(resp)))
  .catch((err) => console.error(err))
  .finally(() => console.log("Fin de peticion"));
