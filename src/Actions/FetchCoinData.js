import axios from 'axios';
import { apiBaseURL } from './../Utils/Constants';
import {
  FETCHING_COIN_DATA,
  FETCH_COIN_DATA_SUCCESS,
  FETCH_COIN_DATA_FAIL
} from './../Utils/ActionTypes';

export default function FetchCoinData() {
  return dispatch => {
    dipatch({ type: FETCHING_COIN_DATA });

    return axios.get(`${apiBaseURL}/v1/ticker/?limit=10`)
      .then(res => {
        dispatch({ type: FETCH_COIN_DATA_SUCCESS, paylod: res.data })
      })
        .catch(err => {
          dispatch({ type: FETCH_COIN_DATA_FAIL, payload: err.data })
        });
  }
}
