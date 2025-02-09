import { useEffect, useState } from "react";
import * as heroeService from "./HeroeService";
import { Heroe } from "../../interface/Heroe";
import HeroeItem from "./HeroeItem";

const HeroesList = () => {
  const [heroes, setHeroes] = useState<Heroe[]>([]);

  const loadHeroes = async () => {
    const res = await heroeService.getHeroes();
    setHeroes(res.data);
  };

  useEffect(() => {
    loadHeroes();
  }, []);

  return (
    <>
      {heroes.length > 0 ? (
        <div className="row">
          <h1 className="text-center">Heroes List</h1>
          {heroes.map((heroe) => (
            <HeroeItem key={heroe.id} heroe={heroe} />
          ))}
        </div>
      ) : (
        <div className="text-center d-flex align-items-center justify-content-center vh-100">
          <h2>Welcome to Super Hereos App.</h2>
        </div>
      )}
    </>
  );
};

export default HeroesList;
