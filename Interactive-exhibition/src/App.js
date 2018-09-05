import React, { Component } from 'react';
import PoemShowcase from './components/PoemShowcase.js';
import './contentLoader.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="grid-container">
          <div class="grid-item" id="item1">
              item1
          </div>

          <div class="grid-item" id="item3">

          </div>

          <div class="grid-item" id="item2">
              <div class="tab" id="tab-1"> tab 1</div>
              <div class="tab" id="tab-2"> tab 2 </div>
              <div class="tab" id="tab-3"> tab 3 </div>
              <div class="tab" id="tab-4"> tab 4 </div>
          </div>

          <div class="grid-item" id="item4">
              item4
          </div>

          <div class="grid-item" id="item5">
                  <PoemShowcase />
          </div>

      </div>
    );
  }
}

export default App;
