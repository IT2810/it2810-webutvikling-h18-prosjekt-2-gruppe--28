import React, { Component } from 'react';
import './App.css';
import elephant from './assets/img/animal/Elephant.svg';
import laugh from './assets/sound/human/laugh.mp3';
const poem = "Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Malesuada nunc vel risus commodo viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Imperdiet massa tincidunt nunc pulvinar sapien et. Ultrices vitae auctor eu augue ut lectus arcu. Amet dictum sit amet justo donec. Volutpat diam ut venenatis tellus in metus vulputate eu. Vitae turpis massa sed elementum tempus. Sem et tortor consequat id porta. Semper quis lectus nulla at volutpat diam ut venenatis. Justo donec enim diam vulputate. Fermentum leo vel orci porta non pulvinar neque. Bibendum enim facilisis gravida neque convallis a. Iaculis nunc sed augue lacus viverra vitae. A erat nam at lectus. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Lectus vestibulum mattis ullamcorper velit sed. Praesent tristique magna sit amet";


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
    
    renderImageContainer(image1) {
        return <ImageContainer imageSource={image1}>
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
            {this.renderImageContainer(elephant)}
            {this.renderPoemContainer(poem)}
            {this.renderAudioContainer(laugh)}
            </div>
      );
    }
  }

  export default ArtContainer;