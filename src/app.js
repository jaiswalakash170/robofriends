import react from 'react';
import CardList from './cardlist';
import {robots} from './robots.js';
import SearchBox from './searchbox';

const App = () => {
    return (
        <div className="tc">
            <h1>Robofriends</h1>
            <SearchBox />
            <CardList robots={robots}/>
        </div>
    );
}

export default App;