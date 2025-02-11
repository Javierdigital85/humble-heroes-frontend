import axios from "axios";
import { Heroe } from "../../interface/Heroe";

const URL= import.meta.env.VITE_BACKEND_URL || "http://localhost:8000/api/superheroes"
console.log("API URL: ", URL);
export const createHeroes = async (hero: Heroe) => {
  return await axios.post(`${URL}`, hero);
};

export const getHeroes = async () => {
  return await axios.get<Heroe[]>(`${URL}`);
};
