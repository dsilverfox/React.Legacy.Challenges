import React, {Component} from 'react';

class Index extends Component {
    async fetchDog() {

        let response = await fetch('https://dog.ceo/api/breeds/image/random');
        let json = await response.json();

        console.log(json);
    } 
    render() {
        return(
            <div>
                Hey! I'm a dog!
            </div>
        )
    }
}

export default DogIndex;