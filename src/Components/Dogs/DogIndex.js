import React, {Component} from 'react';

class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {response: {}}
    };

    
    async fetchDog() {

        let response = await fetch('https://dog.ceo/api/breeds/image/random');
        let json = await response.json();
        console.log(json); //returns an appropriate fetch
        this.setState({response: json.message})
    }
    
    componentDidMount () {
        this.fetchDog();
    };
       
    render() {
        return(
            <div>
                {console.log("State in Return", this.state)}
                <img src={this.state.response} alt="Pupper Doggie!"/>
                <br/>
                <button onClick={() => this.fetchDog()}>More PUPPIES!</button>
            </div>
        )
    }
}

export default DogIndex;