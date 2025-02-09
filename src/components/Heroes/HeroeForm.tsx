import { ChangeEvent, FormEvent, useState } from "react";
import * as heroeService from "./HeroeService";
import { Heroe } from "../../interface/Heroe";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type inputChange = ChangeEvent<HTMLInputElement>;

const HeroeForm = () => {
  const navigate = useNavigate();
  const [hero, setHero] = useState<Heroe>({
    name: "",
    superpower: "",
    humilityScore: 0,
  });

  const handleInputChange = (e: inputChange) => {
    const value =
      e.target.name === "humilityScore"
        ? Number(e.target.value)
        : e.target.value;
    setHero({ ...hero, [e.target.name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await heroeService.createHeroes(hero);
      toast.success("You have created a Hero!");
      console.log("Hero created", hero);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.message;
        toast.error(`${errorMessage}`);
        return;
      }
    }
    navigate("/");
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h1 className="text-center text-secondary">New Heroe</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Write hero's name"
                  className="form-control"
                  onChange={handleInputChange}
                  autoFocus
                  value={hero.name}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="superpower"
                  placeholder="Write the super power"
                  className="form-control"
                  onChange={handleInputChange}
                  value={hero.superpower}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="">Select humility score between 1 and 10</label>
                <input
                  type="number"
                  name="humilityScore"
                  placeholder="Humility Score"
                  className="form-control"
                  onChange={handleInputChange}
                  value={hero.humilityScore}
                />
              </div>
              <div className="text-center">
                <button className="btn btn-primary rounded">
                  Create Heroe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroeForm;
