import React, { Component } from 'react';

class PoemShowcase extends Component {

  constructor(props){
    super(props);
    this.state = {
      poem: {}
    }
  }

  render() {
    console.log(this.state.poem);
    return (
      <div class="poemHolder">
        <h1>Load Title</h1>
        <p id="author">Load Author</p>

        <p> Load Poem</p>
      </div>
    );
  }
}

export default PoemShowcase;
