//The Pokemon component will show an individual Pokemon monster
// It shows an image of the Pokemon and

import axios from "axios";
import { Component } from "react";


// shows the name of it as well.
export default class Pokemon extends Component{

    render(){
      const {pokemon,id,showCard} = this.props;
      return<div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top"  src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+`${id}`+".png"} alt="" /> 
                  <div class="caption">
                    <h3>{pokemon.name}</h3>
                    <p><a href="#" class="btn btn-primary" role="button"  onClick={showCard}>INFOS</a></p>
                  </div>
                  </div>
              </div>
      }
  }


 