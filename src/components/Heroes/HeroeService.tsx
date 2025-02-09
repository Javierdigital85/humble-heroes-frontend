import axios from "axios";
import { Heroe } from "../../interface/Heroe";

export const createHeroes = async (video: Heroe) => {
  return await axios.post("http://localhost:8000/api/superheroes", video);
};

export const getHeroes = async () => {
  return await axios.get<Heroe[]>("http://localhost:8000/api/superheroes");
};
