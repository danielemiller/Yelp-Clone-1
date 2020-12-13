import React, { useContext, useEffect } from 'react';
import RestaurantFinder from  '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
//import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const RestaurantList = (props) => {    
    
    const {restaurants, setRestaurants} = useContext(RestaurantsContext);

    //let history = useHistory();

    useEffect(() => {
      const fetchData = async () => {
        try{
            const response = await RestaurantFinder.get('/');
            setRestaurants(response.data.data.restaurants);
          }catch(err){
              console.log(err)
          };  
      };

      fetchData();
    }, []);
    
    const handleDelete = async (e, id) => {
      e.stopPropagation();
      try {
        const response = await RestaurantFinder.delete(`/${id}`);
        setRestaurants(restaurants.filter(restaurant => {
          return restaurant.id !== id
        }))
      }catch(err){
        console.log(err);
      }
    }
    const handleUpdate = (e, id) => {
    //  history.push(`/restaurants/${id}/update`)
      e.stopPropagation();
      window.location = `/restaurants/${id}/update`
    }

    const handleRestaurantSelect = (id) => {
      window.location = `/restaurants/${id}`;
    }

    const renderRating = (restaurant) => {
      if (!restaurant.count) {
        return <span text-warning>0 Reviews</span>
      }
      return(
       <>
         <StarRating rating={restaurant.id}/>
         <span className="text-warning ml-1">({restaurant.count})</span>  
       </>
      )
      
    }

    return (
        <div className="list-group"> 
          <table className="table table-hover table-dark">
            <thead>
              <tr className="bg-primary">
                  <th scope="col">Restaurant</th>
                  <th scope="col">Location</th>
                  <th scope="col">Price Range</th>
                  <th scope="col">Ratings</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
                {restaurants && restaurants.map( restaurant => {
                  return(
                    <tr onClick={() => handleRestaurantSelect(restaurant.id)} key={restaurant.id}>
                      <td>{restaurant.name}</td>
                      <td>{restaurant.location}</td>
                      <td>{"$".repeat(restaurant.price_range)}</td>
                      <td>{renderRating(restaurant)}</td>
                      <td onClick={(e) => handleUpdate(e, restaurant.id)} className="btn btn-warning">Update</td>
                      <td><button onClick={(e) => handleDelete(e, restaurant.id)} className="btn btn-danger">Delete</button></td>
                  </tr>
                  
                  )}
                )}
                  
              {/* <tr>
                <td>McDonalds</td>  
                <td>New York</td>  
                <td>$$</td>  
                <td>Rating</td>  
                <td><button className="btn btn-warning">Update</button></td> 
                <td><button className="btn btn-danger">Delete</button></td> 
              </tr> */ }

            </tbody>    
          </table>  
        </div>
    )
}

export default RestaurantList 
