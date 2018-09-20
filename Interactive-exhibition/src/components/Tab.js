import React, { Component } from 'react';

/* 
  Retreivs what tab number is active from App.js, and returns a div containing all the tabs, where one is active. 
*/
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


  /* 
    Appends the class name active if the tab is active
  */
 
  isaActive(i){
      if(this.state.active == i){
          return "tab active";
      }
      return"tab";
  }

  render() {
    return(
      <div class="grid-item" id="item4">
        <div onClick={(e) => this.handleClick(0,e)} class={this.isaActive(0)} id="tab-1"><h1>{this.state.alternatives[0]}</h1></div>
        <div onClick={(e) => this.handleClick(1,e)} class={this.isaActive(1)} id="tab-2"><h1>{this.state.alternatives[1]}</h1></div>
        <div onClick={(e) => this.handleClick(2,e)} class={this.isaActive(2)} id="tab-3"><h1>{this.state.alternatives[2]}</h1></div>
        <div onClick={(e) => this.handleClick(3,e)} class={this.isaActive(3)} id="tab-4"><h1>{this.state.alternatives[3]}</h1></div>
      </div>
    );
  }
}

export default Tab;
