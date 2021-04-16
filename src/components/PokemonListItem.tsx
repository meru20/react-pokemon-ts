import { Link } from 'react-router-dom';
import React from 'react';
import '../App.css';

interface PokemonListItemProps{
    poke: Pokemon;

}
const PokemonListItem: React.FC<PokemonListItemProps> = ({poke}) => {
    return(
        <div id='pokemon-list-item'>
            <li className='list-group-item'><img src={poke.img} alt={poke.name}/>
            <div className='d-flex justify-content-between align-items-center'>
            <div className="d-flex flex-row align-items-center">
            <div className="ml-2">
            <h3 className='mb-0'>{poke.name}</h3>
            <div className="d-flex flex-row mt-1 text-black-50">
            <small className='ml-2'>height:{poke.height} | weight: {poke.weight}</small>

            </div>

            </div>
            
            
            <Link to={`/${poke.id}`} className='card-link'>
            View Details
          </Link>
            {/* <button className='btn btn-primary'>view details</button> */}
            </div>
            </div>
            {/* <h6>height:{poke.height} | weight: {poke.weight}</h6> */}
            </li>
            
        </div>
    )
}
export default PokemonListItem;