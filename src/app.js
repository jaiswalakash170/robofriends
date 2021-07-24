import react, {Component} from 'react';
import CardList from './cardlist';
import {robots} from './robots.js';
import SearchBox from './searchbox';
import Scroll from './scroll';
import './app.css'

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ""
        };
    }
    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({robots: robots})
        );
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        if(robots.length === 0)        {
            return (<h1>Loading Roboats</h1>);
        }
        else{
            return (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll><CardList robots={filteredRobots} /></Scroll>
                </div>
            );
        }
    }
}

export default App;