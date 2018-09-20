import React, { Component } from 'react';

class PoemShowcase extends Component {
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        poem: [],
        cache: [[null,null,null,null],[null,null,null,null],[null,null,null,null]],
      };
    }




    /**
     * Checks if media is cached. If not, fetch with the AJAX Fetch-API and save the string in cache attribute in state.
     */
    updateContent(props){
      if(this.state.cache[props.category][props.tab] === null){
        fetch("http://it2810-28.idi.ntnu.no/prosjekt2/assets/poems/poems.json")
          .then(res => res.json())
          .then(
            (result) => {
              var newCache = this.state.cache;
              var categorySting = "";
              if(props.category === 0){
                categorySting = "nature";
              }
              else if(props.category === 1){
                categorySting = "love"
              }
              else if(props.category === 2){
                categorySting = "living"
              }
              console.log(this.state.cache);
              newCache[props.category][props.tab] = result[categorySting]["poem"+((props.tab+1).toString())];

              this.setState({
                isLoaded: true,
                cache: newCache,
                poem: result[categorySting]["poem"+((props.tab+1).toString())]
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
        }
        else{
          this.setState({
            poem:this.state.cache[props.category][props.tab]
          })
        }
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
    const { error, isLoaded, poem} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div id="poemContainer">
          <h1 id ="poemTitle">
            {poem.title}
          </h1>
          <p id="poemAuthor">
            <i>{poem.author}</i>
          </p>
          <p id="poemContent">
            {poem.content}
          </p>
        </div>
      );
    }
  }
}

export default PoemShowcase;
