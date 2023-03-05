import { map } from "rxjs";
import { fromFetch } from "rxjs/fetch";

const baseUrl = "https://api.gbif.org/v1/species";
const defaultDogValue = {
    order: "Carnivora",
    family: "Canidae",
    englishName: "Dog",
    scientificName: "Canis lupus familiaris",
}
const options = {
    selector: async (response) => {
        const result = await response.json();
        return result.results?.at(-1);
    },
};
function animalInfo(animal, animalLabel?) {
    return {
        order: animal.order,
        family: animal.family,
        englishName: animalLabel,
        scientificName: animal.scientificName,
    };
}

export const store = {
    animals: {
        data: [],
        error: ""
    }
}

function getAnimal(url, animalLabel) {
    return fromFetch(url, options).pipe(
        map((animalData) => animalInfo(animalData, animalLabel)),
    )
}

// specific animal http GET requests
export const getMonkey = () => getAnimal(`${baseUrl}/9621/children`, "Monkey")
export const getCat = () => getAnimal(`${baseUrl}/9703/children`, "Cat")
export const getDog = () => getAnimal(`${baseUrl}/9701/children`, "Dog") // children


