import style from "./Details.module.css";

const Details = ({ pokeMon }) => (
  <div className={style.detailsSection}>
    <div>
      <h3>{pokeMon.name}</h3>
    </div>
    <div>
      <p>Height: {pokeMon.height}</p>
      <p>Weight: {pokeMon.weight}</p>
    </div>
    <div className={style.abilities}>
      <h4>Abilities</h4>
      {pokeMon.abilities.map((ability) => (
        <p key={ability.ability.name}>{ability.ability.name}</p>
      ))}
    </div>
  </div>
);

export default Details;
