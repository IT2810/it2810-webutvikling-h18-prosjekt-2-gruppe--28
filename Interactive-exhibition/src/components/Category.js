import React, { Component } from 'react';

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
    }else if(this.props.title === "Images"){
        this.props.parent.updateImageCategory(i);
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

export default Category;
