/* eslint-env browser */
import "whatwg-fetch";
import React from "react";

class Gists extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gists: []
        }
    }
    componentDidMount() {
        fetch('https://api.github.com/users/gaearon/gists')
            .then(response => response.json())
            .then(gists => this.setState({gists: gists
                .filter(gist => gist.description !== "")
                .map(gist => {
                    return {id: gist.id, description: gist.description}
                })}))
    }
    render() { 
        console.log(this.state.gists);
        return <ul className="gist-list">
          {this.state.gists.map(gist => <li key={gist.id}>{gist.description}</li>)}
        </ul>
    }
}

export default Gists;