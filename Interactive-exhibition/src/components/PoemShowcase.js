import React, { Component } from 'react';

class PoemShowcase extends Component {
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        category: props.category,
        tab: props.tab,
        poem: [],
        cache: [[null,null,null],[null,null,null],[null,null,null]]
      };
    }

    updateContent(){
      if(this.state.cache[this.state.category][this.state.tab] == null){
        fetch("http://localhost:3001/poems")
          .then(res => res.json())
          .then(
            (result) => {
              var newCache = this.state.cache;
              var cat = this.state.category;
              var tab = this.state.tab;
              newCache[cat][tab] = result.nature.poem1;
              this.setState({
                isLoaded: true,
                cache: newCache,
                poem: result.nature.poem1
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
        }
    }

    setCategory(newCategory){
      this.setState({
        category:newCategory
      });
    }
    setTab(newTab){
      this.setState({
        tab:newTab
      });
    }

    componentDidMount() {
      this.updateContent();
  }

  render() {
    const { error, isLoaded, poem, cache} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        {console.log(JSON.stringify(cache))}
          <h1>
            {poem.title}
          </h1>
          <p>
            {poem.author}
          </p>
          <p>
            {poem.content}
          </p>
        </div>
      );
    }
  }
}

export default PoemShowcase;
