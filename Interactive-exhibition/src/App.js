import React, { Component } from 'react';
import PoemShowcase from './components/PoemShowcase.js';
import SoundShowcase from './components/SoundShowcase.js'
import './App.css';
import ArtContainer from './ArtContainer.js';
//import elephant from './assets/img/animal/Elephant.svg';
import laugh from './assets/sound/human/laugh.mp3';
import ImageShowcase from './components/ImageShowcase.js';

class Category extends Component{


    constructor(props) {

        super(props);
        this.state = {
            title: props.title,
            alternatives: [props.alt1,props.alt2,props.alt3],
            active:0,
            parent: props.parent
        };

        this.handleClick = this.handleClick.bind(this);
    }


   handleClick(i,e){
    this.setState({active:i});
    if(this.props.title === "Poems"){
      this.props.parent.updatePoemCategory(i);
    }else if(this.props.title === "Sounds"){
      this.props.parent.updateSoundCategory(i);
    }
  }

  isaActive(i){
      if(this.state.active == i){
          return "active";
      }
      return"";
  }

  render() {
    return(
        <div class="category" id="cat-1">
          <h1>{this.state.title}</h1>
          <hr></hr>
          <ul>
            <li onClick={(e) => this.handleClick(0,e)} class={this.isaActive(0)}>{this.state.alternatives[0]}</li>
            <li onClick={(e) => this.handleClick(1,e)} class={this.isaActive(1)}>{this.state.alternatives[1]}</li>
            <li onClick={(e) => this.handleClick(2,e)} class={this.isaActive(2)}>{this.state.alternatives[2]}</li>
          </ul>
        </div>
      );
  }

}

class Tab extends Component{
    constructor(props) {
        super(props);
        this.state = {
            alternatives: ["1","2","3","4"],
            active:0,
            parent:props.parent
        };

        this.handleClick = this.handleClick.bind(this);
    }

   handleClick(i,e){
    this.setState({active:i});
    this.state.parent.updateTab(i);
  }

  isaActive(i){
      if(this.state.active == i){
          return "tab active";
      }
      return"tab";
  }

  render() {
    return(
        <div class="grid-item" id="item3">
        <div onClick={(e) => this.handleClick(0,e)} class={this.isaActive(0)} id="tab-1"><h1>{this.state.alternatives[0]}</h1></div>
        <div onClick={(e) => this.handleClick(1,e)} class={this.isaActive(1)} id="tab-2"><h1>{this.state.alternatives[1]}</h1></div>
        <div onClick={(e) => this.handleClick(2,e)} class={this.isaActive(2)} id="tab-3"><h1>{this.state.alternatives[2]}</h1></div>
        <div onClick={(e) => this.handleClick(3,e)} class={this.isaActive(3)} id="tab-4"><h1>{this.state.alternatives[3]}</h1></div>
        </div>
    );
  }

}

class menuItem extends Component{

    constructor(props) {

        super(props);
    }
}

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        image: 0,
        poemCategory: 0,
        sound: 0,
        tab: 0
      }
      this.handleClick = this.handleClick.bind(this);
  }

  updateTab(i){
    this.setState({
      tab:i
    })
  }

  updatePoemCategory(i){
    this.setState({
      poemCategory:i
    })
  }

  updateSoundCategory(i){
    this.setState({
      soundCategory:i
    })
  }

  handleClick(i,e){
    this.setState({
      tab:i
    })
  }


  render() {
    return (
      <div>
      <div class="grid-container">
        <div class="grid-item" id="item1">
            <h1><u>Interactive exhibition</u></h1>
        </div>
        <div class="grid-item" id="title">
            <h2>Please, choose one from each media!</h2>
        </div>

        <div class="grid-item" id="item2">
           <Category parent = {this} title="Images" alt1="Aniaml" alt2="Human" alt3="Ornament"></Category>
           <Category parent = {this} title="Poems" alt1="Love" alt2="Nature" alt3="Living"></Category>
           <Category parent = {this} title="Sounds" alt1="Electronic" alt2="Human" alt3="String Instrument"></Category>
        </div>
        <Tab parent={this}></Tab>

        <div class="grid-item" id="item4">
          <SoundShowcase category={this.state.soundCategory} tab={this.state.tab}></SoundShowcase>
          <ArtContainer parent={this} 
            imageShowcase={<ImageShowcase category={this.state.poemCategory} tab={this.state.tab} />}
            poemShowcase={<PoemShowcase category={this.state.poemCategory} tab={this.state.tab} />} 
        </div>
            audioSource={laugh}/>
      </div>
    </div>

);
}
}



export default App;
