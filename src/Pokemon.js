//The Pokemon component will show an individual Pokemon monster
// It shows an image of the Pokemon and

import axios from "axios";
import { Component } from "react";
import PokemonCard from "./PokemonCard";

// shows the name of it as well.
export default class Pokemon extends Component{
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    const {pokemon,id} = this.props;
    return(
      <div><PokemonCard key={pokemon.name} id={id} pokemon={pokemon}/></div>
    )
  };

  hideModal = () => {
    this.setState({ show: false });
  };
    render(){
      const {pokemon,id} = this.props;
      return <div className="pokemon--species">
              <div className="pokemon--species--container">        
                <button className="pokemon--species--name" type="button" onClick={this.showModal}> {pokemon.name} </button>
              </div>
            </div>;
      }
  }