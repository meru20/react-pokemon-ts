import React, {useState, useEffect} from 'react';
import pokemon from '../data/pokemonData';
import PokemonListItem from './PokemonListItem';

interface PokemonProps{
    pokes: Pokemon[];
    setPokes: Pokemon[];
    
}

const PokemonListComponent:React.FC<PokemonProps> = () => {
    
    const [pokes, setPokes] = useState<Pokemon[]>(pokemon);
    // const [searchPokemon, setSearchPokemon] = useState<string>([]);
    const [searchTerm, setSearchTerm] =  useState<string>('');
    useEffect(() =>{
        const foundPokemon = pokemon.filter(poke => {
            return(
                poke.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        })
        searchTerm === '' ? setPokes(pokes) : setPokes(foundPokemon);
    }, [searchTerm]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(event.target.value);
        setSearchTerm(e.currentTarget.value);
      };
   
    return (
        <div id='pokemon-list'>
            <div className='row text-center mt-3'>
               <div className='col'>
                  <h2>View our Pokemon Database!</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                 <div className='form-group'>
                   <input
                     type='text'
                     className='form-control'
                    id='hero-search'
                    placeholder='Search for Pokemon'
                    value={searchTerm}
                     onChange={handleChange}
            />
          </div>
        </div>
      </div>
            <div className='row'>
                <div className='col'>
                    <ul className='list-group'>
                        {pokes.map((poke, index) => {
                            return (
                                <PokemonListItem poke={poke}/>
                            )

                        } )}
                    </ul>
                </div>
            </div>
        </div>
    )

}
export default PokemonListComponent;