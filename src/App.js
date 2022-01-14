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
      filtered:[],
      fetched : false,
      loading : false,
      selected: false,
      id:1,
      name:""

    }
    this.handleChange = this.handleChange.bind(this);
    
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
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=50';
    axios({
      url    : url,
      method : 'GET',
    
    }).then((response)=> {
                console.log(response.data);
                this.setState({
                  all_pokemon:response.data.results,
                  filtered:response.data.results,
                  loading : true,
                  fetched : true,
                  
                })
    }).catch((error)=> {console.log(error)})

  }
  componentDidMount(){
    this.getAllPokemon()
  }
  handleChange(e) {
		// Variable to hold the original version of the list
    let currentList = [];
		// Variable to hold the filtered list before putting into state
    let newList = [];

		// If the search bar isn't empty
    if (e.target.value !== "") {
			// Assign the original list to currentList
      currentList = this.state.all_pokemon;

			// Use .filter() to determine which items should be displayed
			// based on the search terms
      newList = currentList.filter(item => {
				// change current item to lowercase
        const lc = item.name.toLowerCase();
				// change search term to lowercase
        const filter = e.target.value.toLowerCase();
				// check to see if the current list item includes the search term
				// If it does, it will be added to newList. Using lowercase eliminates
				// issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
			// If the search bar is empty, set newList to original task list
      newList = this.state.all_pokemon;
    }
		// Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }
  render(){
    const {fetched, loading, filtered,selected} = this.state;
    return(
      <div class="container">
          <div class="py-5 text-center">
            <h2>POKEDEX</h2>
            <p class="lead">Below is an example of pokedex made with https://pokeapi.co/.</p>
            <div>
            <input class="form-control mr-sm-2" type='text' placeholder="Search" aria-label="Search" onChange={this.handleChange}/>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="album py-5 bg-light">
                <div class="container">
                  <div class="row">
                      {fetched?
                        filtered.map((pokemon,index)=><Pokemon key={pokemon.name} id={index+1} pokemon={pokemon} showCard={() => this.showCard(index+1,pokemon.name)}/>):
                        <p> Loading ...</p>
                          }
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
          </div>
      
      </div>
            
    )

  
}
}

export default App;
