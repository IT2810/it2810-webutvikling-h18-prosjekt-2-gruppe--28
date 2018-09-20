import './App.css';
import React, { Component } from 'react';
import PoemShowcase from './components/PoemShowcase.js';
import SoundShowcase from './components/SoundShowcase.js';
import Category from './components/Category.js';
import Tab from './components/Tab.js';
import ImageShowcase from './components/ImageShowcase.js';


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        image: 0,
        poemCategory: 0,
        imageCategory: 0,
        sound: 0,
        tab: 0
      }
      this.handleClick = this.handleClick.bind(this);
  }

  /*
  Updates the states to the diffrent categories/tabs
  */
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

  updateImageCategory(i){
    this.setState({
      imageCategory:i
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
      <div class="grid-container">
        <div class="grid-item" id="item1">
            <h1>Interactive exhibition</h1>
        </div>
        <div class="grid-item" id="item2">
            <h2>Please, choose one from each media!</h2>
        </div>

        <div class="grid-item" id="item3">
           <Category parent = {this} title="Images" alt1="Animal" alt2="Human" alt3="Ornament"></Category>
           <Category parent = {this} title="Poems" alt1="Love" alt2="Nature" alt3="Living"></Category>
           <Category parent = {this} title="Sounds" alt1="Electronic" alt2="Human" alt3="String Instrument"></Category>
        </div>

        <Tab parent={this}></Tab>

        <div class="grid-item" id="item5">
          <ImageShowcase category={this.state.imageCategory} tab={this.state.tab} />
          <PoemShowcase category={this.state.poemCategory} tab={this.state.tab} />    
        </div>  

        <div class="grid-item" id="item6">
          <SoundShowcase category={this.state.soundCategory} tab={this.state.tab} />
        </div>
      </div>  
    );
  }
}


export default App;
