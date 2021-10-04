import { SET_SEARCH_TERM, LOCATION_CHANGED, SET_SEARCH } from './types';
import moment, { months } from "moment";

export const setSearchTerm = (term) => async (dispatch) => {
  dispatch({
    type: SET_SEARCH_TERM,
    payload: { term }
  });
};

export const setLocationChanged = () => async (dispatch) => {
  dispatch({
    type: LOCATION_CHANGED
  });
};

export const setSearch = (term, data) => async (dispatch) => {
  const filtered = data.filter((todo) => {
    let today = moment(new Date(), 'YYYYMMDD');
    let deadlinemoemnt = moment(todo.deadline, 'YYYYMMDD')
    let diff = today.diff(deadlinemoemnt, 'days');
    let isSame = moment(new Date()).isSame(todo.deadline, 'day');
    if (diff > 0 && term.toLowerCase() == "overdue")
      return true
    else if (diff == 0 && isSame && term.toLowerCase() == "todays")
      return true
    else if (diff <= 0 && !isSame && term.toLowerCase() == "upcoming")
      return true;
    else
      return false
  });

  dispatch({
    type: SET_SEARCH,
    payload: { filtered }
  });
};
