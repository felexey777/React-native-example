import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {
 } from 'react-native';


/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    setName: ['data'],
});

export const settingTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
    userName: 'TEST',
});

/* ------------- Reducers ------------- */
const setName = (state, action) => {
  return state.merge({
    userName: action.data.name,
   });
};

/* ------------- Hookup Reducers To Types ------------- */

export const settingReducer = createReducer(INITIAL_STATE, {
 [Types.SET_NAME]: (setName),
});
