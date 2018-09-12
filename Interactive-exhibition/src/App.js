import React, { Component } from 'react';
import PoemShowcase from './components/PoemShowcase.js';
import './App.css';

class App extends Component {

  

  getCategory(){
    return 0;
  }

  getTab(){
    return 0;
  }


  render() {
    return (
      <div className="grid-container">
          <div className="grid-item" id="item1">
              item1
          </div>

          <div className="grid-item" id="item3">

          </div>

          <div className="grid-item" id="item2">
              <div className="tab" id="tab-1"> tab 1</div>
              <div className="tab" id="tab-2"> tab 2 </div>
              <div className="tab" id="tab-3"> tab 3 </div>
              <div className="tab" id="tab-4"> tab 4 </div>
          </div>

          <div className="grid-item" id="item4">
              item4
          </div>

          <div className="grid-item" id="item5">
                  <PoemShowcase category = this.getCategory() tab = this.getTab() />
          </div>

      </div>
    );
  }
}

export default App;
