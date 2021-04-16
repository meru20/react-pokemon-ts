import { useEffect, useState } from 'react';
import pokemonData from '../data/pokemonData';
import { useParams } from 'react-router-dom';
import React from 'react';

interface PokemonItemProps{
    poke: Pokemon;
    // pokeId: number;
    pokeCard: PokemonCard;

}
const PokemonItem: React.FC<PokemonItemProps> = ({poke,pokeCard}) => {
    let  pokeId  = useParams();
    // const [pokemon, setPokemon] = useState<Pokemon>({
    //     // num: '',
    //     // name: '',
    //     // img: '',
    //     // type: [],
    //     // height: '',
    //     // weight: '',
    //     // candy: '',
    //     // egg: '',
    //     // spawn_chance: '',
    //     // avg_spawns: '',
    //     // spawn_time:'',
    //     // multipliers:[],
    //     // weaknesses: [],
    // });

    // useEffect(() => {
    //     console.log('id',pokeId);
    //     let foundHero = pokemonData.find(h => h.id === +pokeId);
    //     // console.log('found', foundHero);
    //     // console.log(foundHero);
    //     setPokemon(foundHero);
    //   }, [pokemon, pokeId]);

      return (
          <div>
              <h1>hi</h1>
          </div>
    //     <div className='card mb-3'>
    //   {/* header */}
    //   <div className='card-header text-center'>{poke.name}</div>
    //   {/* image */}
    //   <div
    //     className='th-card-bg-img'
    //     style={{ backgroundImage: `url(${poke.img})` }}></div>

    //   {/* body */}
    //   <div className='card-body'>
    //     <h4 className='card-title'>
    //        {poke.candy}
    //     </h4>
    //     <h6 className='text-secondary'>"{poke.egg}"</h6>
    //     <div className='my-2'>
    //       <strong>Type: </strong>
    //       {poke.type.map((typ, i) => {
    //         return (
    //           <small key={i}>
    //             {typ}
    //             {i === poke.type.length - 1 ? '' : ', '}
    //           </small>
    //         );
    //       })}
    //     </div>
    //     <div className='my-2'>
    //       <strong>Weaknesses: </strong>
    //       {poke.weaknesses.map((weakness, i) => {
    //         return (
    //           <small key={i}>
    //             {weakness}
    //             {i === poke.weaknesses.length - 1 ? '' : ', '}
    //           </small>
    //         );
    //       })}
    //     </div>
    //     <div className='my-2 d-flex justify-content-between'>
          
         
    //     </div>
    //   </div>
    //   {/* links */}
    // </div>
  );
    
}
export default PokemonItem;