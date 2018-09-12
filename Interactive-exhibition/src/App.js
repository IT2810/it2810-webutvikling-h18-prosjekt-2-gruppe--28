import React, { Component } from 'react';
import PoemShowcase from './components/PoemShowcase.js';
import './App.css';
import ArtContainer from './ArtContainer.js';

function Category(props){

  function handleClick(e){
    e.preventDefault();
    console.log("the link was clicked");
  }

  return(
    <div class="category" id="cat-1">
      <h1>{props.title}</h1>
      <hr></hr>
      <ul>
        <li onClick={handleClick}>{props.c1}</li>
        <li onClick={handleClick}>{props.c2}</li>
        <li onClick={handleClick}>{props.c3}</li>
        <li onClick={handleClick}>{props.c4}</li>
      </ul>
    </div>
  );
}

/* class menuItem extends Component{

    constructor(props) {

        super(props);
        this.state =
    }


    render()
    return{

    }
} */

class App extends Component {



  getCategory(){
    return 0;
  }

  getTab(){
    return 0;
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
            <Category title="test" c1="hei" c2="hallo" c3="hi" c4="jark"/>

            <div class="category" id="cat-1">
                <h2>Images</h2>
                <hr></hr>
                <ul>
                    <li class="active">test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
            </div>

            <div class="category" id="cat-2">
                <h2>Poems</h2>
                <hr></hr>
                <ul>
                    <li>test</li>
                    <li>test</li>
                    <li class="active">test</li>
                    <li>test</li>
                </ul>
            </div>
            <div class="category" id="cat-3">
                <h2>Music</h2>
                <hr></hr>
                <ul>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li class="active">test</li>
                </ul>
            </div>
        </div>

        <div class="grid-item" id="item3">
            <div class="tab active" id="tab-1"><h1>1</h1></div>
            <div class="tab" id="tab-2"><h1>2</h1> </div>
            <div class="tab" id="tab-3"><h1>3</h1></div>
            <div class="tab" id="tab-4"><h1>4</h1></div>
        </div>

        <div class="grid-item" id="item4">

            <div class="artContainer">
                <div class="exhibit" id="art"><img src="./assets/img/animal/Pig.svg"></img></div>
                <div class="exhibit" id="text">
                <div className="grid-item" id="item5">
                        <PoemShowcase category = {this.getCategory()} tab = {this.getTab()} />
                </div>
                </div>
                <div class="exhibit" id="sound">
                    <audio controls>
                        <source src="#" type="audio/mpeg"></source>
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>



          </div>
      </div>
    </div>
    );
  }
}


export default App;
