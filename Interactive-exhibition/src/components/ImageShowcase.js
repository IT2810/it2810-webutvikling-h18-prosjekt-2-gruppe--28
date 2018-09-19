import React, { Component } from 'react';

class ImageShowcase extends Component {
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        image: [],
        cache: [[null,null,null,null],[null,null,null,null],[null,null,null,null]],
      };
    }


    updateContent(props){
      if(this.state.cache[props.category][props.tab] === null){
        fetch("http://localhost:3001/images")
          .then(res => res.json())
          .then(
            (result) => {
              var newCache = this.state.cache;
              var categorySting = "";
              if(props.category === 0){
                categorySting = "animal";
              }
              else if(props.category === 1){
                categorySting = "human"
              }
              else if(props.category === 2){
                categorySting = "ornament"
              }
              console.log(this.state.cache);
              newCache[props.category][props.tab] = result[categorySting]["image"+((props.tab+1).toString())];

              this.setState({
                isLoaded: true,
                cache: newCache,
                image: result[categorySting]["image"+((props.tab+1).toString())]
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
            image:this.state.cache[props.category][props.tab]
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
    const { error, isLoaded, image} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        
      return (
          <div className="poemContainer">
        <div dangerouslySetInnerHTML={{__html: image.svg}} />
        </div>
      );
    }
  }
}

export default ImageShowcase;
