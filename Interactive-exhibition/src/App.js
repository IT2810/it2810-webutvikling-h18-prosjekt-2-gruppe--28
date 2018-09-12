import React, { Component } from 'react';
import ArtContainer from './ArtContainer.js';
import './App.css';
import elephant from './assets/img/animal/Elephant.svg';
import laugh from './assets/sound/human/laugh.mp3';
const poem = "Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Malesuada nunc vel risus commodo viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Imperdiet massa tincidunt nunc pulvinar sapien et. Ultrices vitae auctor eu augue ut lectus arcu. Amet dictum sit amet justo donec. Volutpat diam ut venenatis tellus in metus vulputate eu. Vitae turpis massa sed elementum tempus. Sem et tortor consequat id porta. Semper quis lectus nulla at volutpat diam ut venenatis. Justo donec enim diam vulputate. Fermentum leo vel orci porta non pulvinar neque. Bibendum enim facilisis gravida neque convallis a. Iaculis nunc sed augue lacus viverra vitae. A erat nam at lectus. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Lectus vestibulum mattis ullamcorper velit sed. Praesent tristique magna sit amet";

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
  render() {
    return (
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
          <ArtContainer imageSource={elephant} poemContent={poem} audioSource={laugh}/>
        </div>
      </div>
        
    );
  }
}


export default App;
