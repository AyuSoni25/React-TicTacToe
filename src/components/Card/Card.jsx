
import Icon from '../Icon/Icon';
import './Card.css';

function Card({player, onPlay}){
    return <div className="card" onClick={onPlay}>
        <Icon iconName={player}/>
    </div>
}

export default Card;