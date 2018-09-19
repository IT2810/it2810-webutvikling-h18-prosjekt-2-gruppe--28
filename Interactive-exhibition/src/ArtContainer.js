import React, { Component } from 'react';
import './App.css';

function AudioContainer(props) {
  return (
    <div class="exhibit" id="sound">
      <audio controls>
        <source src={props.audioSource} type="audio/mpeg"></source>
          Your browser does not support the audio element.
      </audio>
    </div>
  );
}

class ArtContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        imageShowcase : props.imageShowcase,
        poemShowcase : props.poemShowcase,
        audioSource : props.audioSource,
    };
  }

  renderImageContainer(imageShowcase) {
      return imageShowcase;
  }

  renderPoemContainer(poemShowcase) {
    return poemShowcase;
  }

  renderAudioContainer(audioSource) {
    return <AudioContainer audioSource={audioSource}>
    </AudioContainer>;
  }

  render() {
    return (
          <div class="artContainer">
          {this.renderImageContainer(this.state.imageShowcase)}
          {this.renderPoemContainer(this.state.poemShowcase)}
          {this.renderAudioContainer(this.state.audioSource)}
          </div>
    );
  }
}

  export default ArtContainer;
