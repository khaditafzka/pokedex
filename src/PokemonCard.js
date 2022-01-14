//The Pokemon component will show an individual Pokemon monster
// It shows an image of the Pokemon and

import axios from "axios";
import { Component } from "react";

// shows the name of it as well.
export default class PokemonCard extends Component{
    
  
    async getData(id) {
      let res=""
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((resp)=>  {
          console.log(resp.data);
        
         res = resp.data.sprites.front_default;
        }).catch((error)=>console.log(error))
     
        return res;
    }

    render(){
      const {id,name} = this.props;
      console.log(this.getData(id));
      return<div class="container">
      <div class="card p-2">
        <img class="card-img-top"  src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+`${id}`+".png"} alt="" /> 
          <div class="caption">
            <h3>{name}</h3>
            
          </div>
          </div>
      </div>
          
      }
  }