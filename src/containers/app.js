import react, {Component} from 'react';
import CardList from '../components/cardlist';
import {robots} from '../robots.js';
import SearchBox from '../components/searchbox';
import Scroll from '../components/scroll';
import ErrorBoundary from '../components/ErrorBoundary';
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
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return !robots.length ?
            <h1>Loading Roboats</h1> : 
            (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        ;
    }
}

export default App;