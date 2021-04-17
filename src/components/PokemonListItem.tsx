import { Link } from 'react-router-dom';
import React from 'react';
import '../App.css';

interface PokemonListItemProps{
    poke: Pokemon;

}
const PokemonListItem: React.FC<PokemonListItemProps> = ({poke}) => {
    return(
        <div id='pokemon-list-item'>
            <li className='list-group-item d-flex  flex-col  justify-content-between align-items-center'><img src={poke.img} alt={poke.name}/>
            
            
            <div className="ml-2">
            <h3 className='mb-0 ml-4'>{poke.name}</h3>
            <div className="d-flex flex-row mt-1 text-black-50">
            <small className='ml-1 mt-3'>height:{poke.height} | weight: {poke.weight}</small>

            </div>

            </div>
            
            
            <Link to={`/${poke.id}`} className='card-link'>
            View Details
          </Link>
            {/* <button className='btn btn-primary'>view details</button> */}
            
           
            {/* <h6>height:{poke.height} | weight: {poke.weight}</h6> */}
            </li>
            
        </div>
    )
}
export default PokemonListItem;