/* eslint-env browser */
import React, {Component} from "react";
import {getPosts} from "./Posts"

export default class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        getPosts().then(posts => {
            this.setState(posts)
        });
    }
    render() {
        return <ul className="post-list">{this.state.posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
    }
}