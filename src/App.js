import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';
import PokemonCard from './PokemonCard';

class App extends Component {
	constructor(props, context) {
		super(props, context);

    this.state ={
      all_pokemon:[],
      fetched : false,
      loading : false,
      selected: false,
      id:1,
      name:""

    }
    
  }  

  showCard = (id,name) => {
    this.setState({ selected: true});
    console.log("kkk");
    console.log(id);
    console.log(name)

    this.setState({id:id, name:name});
  };
  async getAllPokemon(){
    this.setState({
      loading : true
    });
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=200';
    axios({
      url    : url,
      method : 'GET',
    
    }).then((response)=> {
                console.log(response.data);
                this.setState({
                  all_pokemon:response.data.results,
                  loading : true,
                  fetched : true,
                  
                })
    }).catch((error)=> {console.log(error)})

  }
  componentDidMount(){
    this.getAllPokemon()
  }
  render(){
    const {fetched, loading, all_pokemon,selected} = this.state;
    let content ;
    if(fetched){
      content =  <div class="container">
          <div class="py-5 text-center">
          <h2>POKEDEX</h2>
          <p class="lead">Below is an example of pokedex made with https://pokeapi.co/.</p>
          <div>
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                  
          </div>
        
        </div>
      <div class="row">
                  <div class="col-8">
                    <div class="album py-5 bg-light">
                      <div class="container">
                        <div class="row">
                          {all_pokemon.map((pokemon,index)=><Pokemon key={pokemon.name} id={index+1} pokemon={pokemon} showCard={() => this.showCard(index+1,pokemon.name)}/>)} 
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                  <div class="container">
                  <div class="py-5 text-center">
                  
                    {!selected?<blockquote class="blockquote"><p class="mb-0"> choose a pokemon</p></blockquote>: <PokemonCard name={this.state.name} id={this.state.id}/>}
                    </div>
                    </div>
                </div>
          {/* <PokemonCard key={this.state.name} id={this.state.id}/> */}
      </div>;
      </div>
    }
    // else if(fetched && selected) {
    //   content =<div class="row">
    //     <div class="col-xs-12 col-md-8">{all_pokemon.map((pokemon,index)=><Pokemon key={pokemon.name} 
    //     id={index+1} pokemon={pokemon} showCard={() => this.showCard(index+1,pokemon.name)}/>)} 
    //    </div>
    //     <div class="col-xs-6 col-md-4">
    //     <p> l</p>
       
    //    </div>
    //       {/* <PokemonCard key={this.state.name} id={this.state.id}/> */}
    //   </div>
    // }
    else if(loading && !fetched){
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
