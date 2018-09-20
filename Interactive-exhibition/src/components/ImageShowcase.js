import React, { Component } from 'react';



/* 
* Retrieves category and tab number from app.js, and returns a div containing an svg tag with the correct inner xml using dangerouslySetInnerHTML. 
*/
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

/**
 * Checks if media is cached. If not, fetch with the AJAX Fetch-API and save the string in cache attribute in state.
 */
    updateContent(props){
      if(this.state.cache[props.category][props.tab] === null){
        fetch("../assets/img/images.json")
          .then(res => res.json())
          .then(
            (result) => {
              console.log("result")
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
              console.log(props.category);
              console.log(props.tab);
              try{
                newCache[props.category][props.tab] = result[categorySting]["image"+((props.tab+1).toString())];
               }catch(error){
                newCache[0][props.tab] = result[categorySting]["image"+((props.tab+1).toString())];
               }
              

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
          <div id="imageContainer">
        <div dangerouslySetInnerHTML={{__html: image.svg}} />
        </div>
      );
    }
  }
}

export default ImageShowcase;
