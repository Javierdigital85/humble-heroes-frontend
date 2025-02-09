import { Heroe } from "../../interface/Heroe";

interface Props {
  heroe: Heroe;
}

const HeroeItem = ({ heroe }: Props) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card card-body">
        <div className="d-flex justify-content-between">
          <div key={heroe.id}>
            <h1 className="text-primary">Name: {heroe.name}</h1>
            <h3>Super Power: {heroe.superpower}</h3>
            <h3>Humility Score: {heroe.humilityScore}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroeItem;
