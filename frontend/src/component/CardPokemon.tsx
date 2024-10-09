import { Pokemon } from '../model/Pokemon';
import './CardPokemon.css';

interface CardProps {
    pokemon: Pokemon;
}

export default function Card(props: CardProps) {
    const { name, height, number, health, weight, url } = props.pokemon;

    return (
        <div className="container-card">
            <div>
                <img className="img" src={url} alt={name} />
            </div>
            <div className="detail-container">
                <div className="detail">Nombre:</div>
                <div className="detail">{name}</div>
            </div>
            <div className="detail-container">
                <div className="detail">Vida:</div>
                <div className="detail">{health} hp</div>
            </div>
            <div className="detail-container">
                <div className="detail">Peso:</div>
                <div className="detail">{weight} kg</div>
            </div>
            <div className="detail-container">
                <div className="detail">Altura:</div>
                <div className="detail">{height} mt</div>
            </div>
            <div className="detail-container">
                <div className="detail">Numero:</div>
                <div className="detail">{number}</div>
            </div>
        </div>
    );
}
