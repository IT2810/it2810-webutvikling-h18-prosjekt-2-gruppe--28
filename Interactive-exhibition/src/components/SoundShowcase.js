import React, { Component } from 'react';
import electronic1 from "../assets/sound/electronic/dubstep.mp3";
import electronic2 from "../assets/sound/electronic/moose.mp3";
import electronic3 from "../assets/sound/electronic/motion.mp3";
import electronic4 from "../assets/sound/electronic/scifi.mp3";
import human1 from "../assets/sound/human/babyCry.mp3";
import human2 from "../assets/sound/human/laugh.mp3";
import human3 from "../assets/sound/human/toast.mp3";
import human4 from "../assets/sound/human/yiihaw.mp3";
import stringInstrument1 from "../assets/sound/stringInstruments/cuteukulele.mp3";
import stringInstrument2 from "../assets/sound/stringInstruments/smallguitar.mp3";
import stringInstrument3 from "../assets/sound/stringInstruments/sunny.mp3";
import stringInstrument4 from "../assets/sound/stringInstruments/ukulele.mp3";
var sounds = [[electronic1,electronic2,electronic3,electronic4],[human1,human2,human3,human4],[stringInstrument1,stringInstrument2,stringInstrument3,stringInstrument4]];


function itWork(){
  document.getElementById("audio").pause();
  console.log("tallafr");
}

class SoundShowcase extends Component {
  constructor(props) {
      super(props);
      this.state = {
        sound: electronic1,
      };
    }

   updateContent(props){
       console.log(props.category + ", " + props.tab);
       try{
         this.setState({
           sound: sounds[props.category][props.tab]
          })
        }catch(error){
            this.setState({
                sound: sounds[0][props.tab]
                })
        }
        this.refs.audio.load();
    }

    componentDidMount() {
      this.updateContent(this.props);
    }

    componentDidUpdate(prevProps){
      if(this.props.tab !== prevProps.tab || this.props.category !== prevProps.category){
        this.updateContent(this.props);
      }
    } 

  render() {
      return (
        <div class="exhibit" id="sound">
          <audio controls autoplay ref="audio">
            <source  src={this.state.sound} type="audio/mpeg">
            </source>
            Your browser does not support the audio element.
          </audio>
      </div>
      );
  }
}

export default SoundShowcase;
