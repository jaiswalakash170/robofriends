import react from 'react';
import CardList from './cardlist';
import {robots} from './robots.js';

const App = () => {
    return (<CardList robots={robots}/>);
}

export default App;