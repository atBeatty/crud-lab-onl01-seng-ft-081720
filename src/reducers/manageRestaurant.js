import cuid from 'cuid';

export default function manageRestaurants(state={restaurants: [], reviews: []}, action) {

    switch(action.type) {
        case "ADD_RESTAURANT":
            let newRestaurant = {...action.payload, id: cuid()}
            return {...state, restaurants: [...state.restaurants, newRestaurant]}
        case "DELETE_RESTAURANT":

            const remainingRestaurants = state.restaurants.filter(rest => rest.id !== action.payload)
            return {...state, restaurants:remainingRestaurants}
        case "ADD_REVIEW":
            return {...state, reviews:[...state.reviews, action.payload]}
        default:
            return state
    }

}
