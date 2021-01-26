import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {
constructor(props) {
  super(props)
  
}
  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurantId} addReview={this.props.addReview}/>
        <Reviews restaurantId={this.props.restaurantId} reviews={this.props.reviews} />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {

    reviews: state.reviews
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

    addReview: review => dispatch({type: "ADD_REVIEW", payload: review}),
    deleteReview: (reviewId) => dispatch({type:'DELETE_REVIEW', payload: reviewId})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
