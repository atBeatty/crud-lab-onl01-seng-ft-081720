import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    debugger
    let reviewsToJSX = this.props.reviews.map(review => review.restaurantId === this.props.restaurantId).map((rev, i) => <Review review={rev} key={i}/>)

    console.log(this.props)
    return (
      <ul>
        {reviewsToJSX}
      </ul>
    );
  }
};

export default Reviews;