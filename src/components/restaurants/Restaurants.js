import React, { Component } from 'react';
import Restaurant from './Restaurant'
class Restaurants extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const restaurantsToJSX = this.props.restaurants.map((rest, i) => <Restaurant deleteRestaurant={this.props.deleteRestaurant} restaurant={rest} key={i}/>)
    console.log(this.restaurantsToJSX)
    console.log(this.props.restaurants, "PROPS?")
    return(
      <div>
        Restaurants Component
        <ul>

      {restaurantsToJSX}
        </ul>
      </div>
    );
  }
};

export default Restaurants;