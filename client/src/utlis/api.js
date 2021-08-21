import axios from "axios";

export const getTrucks = () => axios.get('https://api.yelp.com/v3/foodtrucks/search');