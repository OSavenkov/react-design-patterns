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
    return <ul className="post-list">
      { this.state
            .posts
            .map(post => 
              <li key={post.id}>
                <h1>{post.title}</h1>
                {post.excerpt && <p>{post.excerpt}</p>}
              </li>)
      }
    </ul>
    }
}