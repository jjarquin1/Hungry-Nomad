// import BEARER_TOKEN from 'dotenv'
import axios from "axios";
const isProd = true;
const cors_proxy = isProd ? '' : 'https://wendy-cors.herokuapp.com/'
const BEARER_TOKEN = 'KmiJGRMThEuGygNdk0H5p6d-27Jy78zBMsqzHh9CqLSlkmmlsN1VhNaixN51QGz4SoYf39422WaXJuHxdFjNF_Qs6cV2eossjY7oHv_q9WrdSrWgWohx_KUx1D4hYXYx'
export const getTrucks = async (query) => axios
    .get(
        `${cors_proxy}https://api.yelp.com/v3/businesses/search?location=${query}`,
        {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            params: {
                term: 'food-trucks',

            },
        },
    )


export const getRecommend = async (term) => axios
    .get(
         `${cors_proxy}https://api.yelp.com/v3/businesses/search?term=${term}`,
        {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            params: {
                location: 'california',

            },

        },
    )




