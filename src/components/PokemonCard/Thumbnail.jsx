import style from "./Thumbnail.module.css";
import defaultImage from "./default.png";
const Thumbnail = ({ imageUrl }) => (
  <div className={style.imageCard}>
    <img alt="pokemon" src={imageUrl ? imageUrl : defaultImage} />
  </div>
);

export default Thumbnail;
