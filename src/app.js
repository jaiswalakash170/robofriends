import react, {Component} from 'react';
import CardList from './cardlist';
import {robots} from './robots.js';
import SearchBox from './searchbox';

const state = {
    robots: robots,
    searchfield: ""
};

class App extends Component {
    render() {
        return (
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBox />
                <CardList robots={robots}/>
            </div>
        );
    }
}

export default App;