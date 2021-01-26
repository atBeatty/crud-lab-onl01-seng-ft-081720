import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {
constructor(props) {
  super(props)

}

handleOnClick = (e) => {
  debugger
  this.props.deleteRestaurant(this.props.restaurant.id)
}

  render() {
    const { restaurant } = this.props;
    console.log(restaurant)
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleOnClick}> X </button>
          <ReviewsContainer restaurantId={restaurant.id} restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};


// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteRestaurant: (restaurantId) => dispatch({type:'DELETE_RESTAURANT', payload: restaurantId})
//   }
// }


export default Restaurant
// export default connect(null, mapDispatchToProps)(Restaurant);
