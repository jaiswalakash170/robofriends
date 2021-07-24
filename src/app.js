import react, {Component} from 'react';
import CardList from './cardlist';
import {robots} from './robots.js';
import SearchBox from './searchbox';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ""
        };
    }

    onSearchChange(event){
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={this.state.robots}/>
            </div>
        );
    }
}

export default App;