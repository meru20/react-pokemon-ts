import {Route, Switch} from 'react-router-dom';
import React from 'react';
import PokemonListComponent from '../components/PokemonList';
import PokemonItem from '../components/Pokemon';


const AppRouter:React.FC = () => {
  
  return (
    <div className="container">
      <Switch>
          <Route path='/' exact component={PokemonListComponent}/>
          <Route path='/:pokemonId' component={PokemonItem}/>
      </Switch>
      
      
    </div>
  );
}

export default AppRouter;