import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text:''
    }
  }
  handleOnSubmit = e => {
    e.preventDefault()
    let review = {...this.state, 
      restaurantId: this.props.restaurantId
    }
    this.props.addReview(review)
    this.setState({
      text: ''
    })
   
  }

  handleOnChange = e => {
    this.setState({...this.state, 
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleOnSubmit}>
        <input onChange={this.handleOnChange} name="text" value={this.state.text}/>
        <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
