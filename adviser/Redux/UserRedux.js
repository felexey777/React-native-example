import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setAdviserData: ['data'],

});

export const userTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable({
  adviserData: [],
});

/* ------------- Reducers ------------- */
// const reduxNavigate = (state, action) => {
//   return state.merge({
//     reduxNavigate: action.data,
//   });
// };

 const setAdviserData = (state, action) => {
  return state.merge({
    adviserData: action.data.adviserData,
   });
};

/* ------------- Hookup Reducers To Types ------------- */

export const userReducer = createReducer(INITIAL_STATE, {
  [Types.SET_ADVISER_DATA]: (setAdviserData),


});
