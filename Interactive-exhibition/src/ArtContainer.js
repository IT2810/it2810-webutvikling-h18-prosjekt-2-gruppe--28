import React, { Component } from 'react';
import './App.css';

class ArtContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        imageShowcase : props.imageShowcase,
        poemShowcase : props.poemShowcase,
        soundShowcase : props.soundShowcase,
    };
  }

  renderImageContainer(imageShowcase) {
      return imageShowcase;
  }

  renderPoemContainer(poemShowcase) {
    return poemShowcase;
  }

  renderAudioContainer(audioShowcase) {
    return audioShowcase;
  }

  render() {
    return (
          <div class="artContainer">
          {this.renderImageContainer(this.state.imageShowcase)}
          {this.renderPoemContainer(this.state.poemShowcase)}
          {this.renderAudioContainer(this.state.soundShowcase)}
          </div>
    );
  }
}

  export default ArtContainer;
