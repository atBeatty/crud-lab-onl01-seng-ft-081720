import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleOnChange = (e) => {
    this.setState({
      text: e.target.value
    })
    console.log(this.state.text)
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addRestaurant(this.state)
    console.log("SUBMIT TO ADD RESTAURANT")
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleOnSubmit}>
        <input name="text" value={this.state.text} onChange={this.handleOnChange}/>
        <input value="submit" type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
