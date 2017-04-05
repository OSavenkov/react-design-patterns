/* eslint-env browser */
import "whatwg-fetch";
import React from "react";

const WithFetchedData = url => Component => {
    return class IO extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                data: []
            }
        }
        componentDidMount() {
        const endpoint = typeof url === 'function'
            ? url(this.props)
            : url
          fetch(endpoint)
            .then(response => response.json())
            .then(data => this.setState(
                {data: data
                // .filter(gist => gist.description !== "")
                // .map(gist => {
                //     return {id: gist.id, description: gist.description}
                // })
                }))
        }
        render() {
            return <Component {...this.props} {...this.state}/>
        }
    }
}

export default WithFetchedData;