import React, { Component } from 'react';

class PoemShowcase extends Component {
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }

    componentDidMount() {
    this.setState({ isLoading: true });

    fetch("http://localhost:3001/poems")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.nature
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

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {items.map(item => (
            <h1>
              {item.poem1.title}
            </h1>
          ))}
          {items.map(item => (
            <p>
              {item.poem1.author}
            </p>
          ))}
          {items.map(item => (
            <p>
              {item.poem1.content}
            </p>
          ))}
        </div>
      );
    }
  }
}

export default PoemShowcase;
