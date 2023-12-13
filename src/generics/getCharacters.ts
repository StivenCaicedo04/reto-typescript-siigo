import axios from "axios";
import { Characters, SpecificChar } from "../interfaces";

export const getCharacters = async (): Promise<Characters> => {
  const { data } = await axios.get<Characters>(
    `https://rickandmortyapi.com/api/character`
  );

  return data;
};

export const getCharacterById = async (id: number): Promise<SpecificChar> => {
  const { data } = await axios.get<SpecificChar>(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  return data;
};

export async function showCharacters(): Promise<void> {
  const characters = await getCharactersFromLocalStorage();
  const charactersDiv = document.getElementById("characters");
  if (charactersDiv) {
    charactersDiv.innerHTML = "";
    characters.results.forEach((character) => {
      const characterElement = document.createElement("div");
      characterElement.innerHTML = `
                <h2>${character.name}</h2>
                <p>Status: ${character.status}</p>
                <p>Species: ${character.species}</p>
              `;
      charactersDiv.appendChild(characterElement);
    });
  }
}

export function getCharactersFromLocalStorage(): Characters {
  const charactersString = localStorage.getItem("characters");
  if (charactersString) {
    const characters = JSON.parse(charactersString) as Characters;
    return characters;
  } else {
    return {} as Characters;
  }
}
