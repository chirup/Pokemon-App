
import style from './Thumbnail.module.css';

const Thumbnail = ({ imageUrl }) => (
    <div className={style.imageCard}>
        <img alt="pokemon" src={imageUrl} />
    </div>
);

export default Thumbnail;