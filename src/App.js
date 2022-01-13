import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';

class App extends Component {
	constructor(props, context) {
		super(props, context);

    this.state ={
      all_pokemon:[],
      fetched : false,
      loading : false,

    }
    
  }
  async getAllPokemon(){
    this.setState({
      loading : true
    });
    const url = 'https://pokeapi.co/api/v2/generation/3/';
    axios({
      url    : url,
      method : 'GET',
    }).then((response)=> {
                console.log(response.data);
                this.setState({
                  all_pokemon:response.data,
                  loading : true,
                  fetched : true
                })
    }).catch((error)=> {console.log(error)})

  }
  componentDidMount(){
    this.getAllPokemon()
  }
  render(){
    const {fetched, loading, all_pokemon} = this.state;
    let content ;
    if(fetched){
      content = <div className="pokemon--species--list">{all_pokemon.abilities.map((pokemon,index)=><Pokemon key={pokemon.name} id={index+1} pokemon={pokemon}/>)}</div>;
    }else if(loading && !fetched){
        content = <p> Loading ...</p>;
    }
    else{
      content = <div/>;
    }
    return  <div>
      {content}
    </div>;
    
  }
 
}

export default App;
