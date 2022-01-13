//The Pokemon component will show an individual Pokemon monster
// It shows an image of the Pokemon and

import axios from "axios";
import { Component } from "react";

// shows the name of it as well.
export default class PokemonCard extends Component{
    
  
    async getData(id) {
   
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(res.data.sprites);
        return res.data.sprites.front_default;
        // setImg(res.data.sprites.front_default);
        // setType(res.data.types[0].type.name);
      }
    render(){
      const {pokemon,id} = this.props;
      return <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="pokemon--species--container">
                <div className="pokemon--species--sprite">
                <img src={this.getData(id)} alt="" /> 
                </div>
                <div className="pokemon--species--name"> {pokemon.name} </div>
              </div>
            </div>;
      }
  }