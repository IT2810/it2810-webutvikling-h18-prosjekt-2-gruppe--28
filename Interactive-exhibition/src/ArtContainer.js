import React, { Component } from 'react';
import './App.css';

function ImageContainer(props) {
  return (
    <img class="exhibit" id="art" src={props.imageSource}/>
  );
}

function PoemContainer(props) {
  return (
    <div class="exhibit" id="text">
      <h2>{props.poemTitle}</h2>
      <p>{props.poemContent}</p>
    </div>
  );
}

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
        imageSource : props.imageSource,
        poemContent : props.poemContent,
        audioSource : props.audioSource,
    };
  }
    
  renderImageContainer(imageSource) {
      return <ImageContainer imageSource={imageSource}>
      </ImageContainer>;
  }

  renderPoemContainer(poemContent) {
    return <PoemContainer poemTitle={"Hello"} poemContent={poemContent}>
    </PoemContainer>;
  }

  renderAudioContainer(audioSource) {
    return <AudioContainer audioSource={audioSource}>
    </AudioContainer>;
  }
  
  render() {
    return (
          <div class="artContainer">
          {this.renderImageContainer(this.state.imageSource)}
          {this.renderPoemContainer(this.state.poemContent)}
          {this.renderAudioContainer(this.state.audioSource)}
          </div>
    );
  }
}

  export default ArtContainer;