import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';


/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  openCommSseChannel: ['data'],
  openCommCameraChannel: ['data'],
  simulateSse: ['data'],
  turnOffSse: ['data'],
  closeCameraSseChannel: null,
  closeCommSseChannel: null,

});

export const sseChannelTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable({
  cameraChannel: {},
});

/* ------------- Reducers ------------- */

const openCommSseChannel = (state) => {
    return state;
};
const openCommCameraChannel = (state, action) => {
  return state.merge({ cameraChannel: action.data.cameraChannel });
};
const closeCameraSseChannel = (state) => {
    return state;
};
const closeCommSseChannel = (state) => {
  return state;
};
const simulateSSE = state => {
  return state;
};
const turnOffSse = state => {
  return state;
};


/* ------------- Hookup Reducers To Types ------------- */

export const sseChannelReducer = createReducer(INITIAL_STATE, {
  [Types.OPEN_COMM_SSE_CHANNEL]: (openCommSseChannel),
  [Types.OPEN_COMM_CAMERA_CHANNEL]: (openCommCameraChannel),
  [Types.CLOSE_CAMERA_SSE_CHANNEL]: (closeCameraSseChannel),
  [Types.CLOSE_COMM_SSE_CHANNEL]: (closeCommSseChannel),
  [Types.SIMULATE_SSE]: (simulateSSE),
  [Types.TURN_OFF_SSE]: (turnOffSse),
});
