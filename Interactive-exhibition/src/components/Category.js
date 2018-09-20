import React, { Component } from 'react';


/*
  Retreivs active category number, category title, and the alternatives from App.js. 
  Returns a div containing a h1 tag with the title and an unorderd list with alle the alternatives
*/
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

    /*
    * if a category is clicked it will call on the update****category in App.js
    */

   handleClick(i,e){
    this.setState({active:i});
    if(this.props.title === "Poems"){
      this.props.parent.updatePoemCategory(i);
    }else if(this.props.title === "Images"){
        this.props.parent.updateImageCategory(i);
    }else if(this.props.title === "Sounds"){
      this.props.parent.updateSoundCategory(i);
    }
  }

    /* 
    * Appends the class name active if the category is active
    */
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

export default Category;
