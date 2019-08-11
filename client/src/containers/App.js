import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Posts from '../components/Posts/Posts';

class App extends Component {
state = {
  posts: []
}

componentDidMount() {
  axios.get(`http://localhost:8050/posts`)
    .then(res => {
      const posts = res.data;
      this.setState({ posts });
    })
}

  render() {
    return (
      <div className="App">
        <p>Posts</p>
        <Posts posts={this.state.posts}/>
      </div>
    );
  }

}

export default App;
