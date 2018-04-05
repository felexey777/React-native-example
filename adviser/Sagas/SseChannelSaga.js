/*eslint no-underscore-dangle: ["error", { "allow": ["_bodyText"] }]*/
import { put, select, take } from 'redux-saga/effects';
import { channel } from 'redux-saga';
import eventSource from 'react-native-eventsource';

export function* openCommSseChannel(action) {
  this.commSagaChannel = channel();
  const state = yield select();
  const endPointOpenCommSSEChannel = `${state.setting.endPoint}`;
   console.log(`PATH SSE CHANNEL     ${endPointOpenCommSSEChannel}`);
  this.channelWillClose = false;
  this.commSSEChannel = new eventSource(endPointOpenCommSSEChannel);
  this.commSSEChannel.onerror = (error) => {
      console.log(`ERROR SSE CHANNEL        ${
        error.message}, commSSEChannel: ${this.commSSEChannel}`);
      if (!this.channelWillClose) {
          this.commSagaChannel.put({
            type: 'OPEN_COMM_SSE_CHANNEL',
            data: { userId: action.data.userId,
            endPoint: action.data.endPoint } });
      }
      this.channelWillClose = false;
  };
  this.commSSEChannel.onmessage = ev => {
    try {
      console.log(`COM SSE CHANNEL        ${JSON.stringify({ ev })}`);
    } catch (e) {
      console.warn(`CommSseChannel error!!!    ${e}`);
    }
  };

  while (this.commSSEChannel) {
    const channelAction = yield take(this.commSagaChannel);
    // console.log(channelAction);
    yield put(channelAction);
  }
}

export function* closeCommSseChannel(action) {
  console.log(`CLOSE COMM SSE CHANNEL      ${JSON.stringify(action)}`);
  yield select();
  this.channelWillClose = true;
  this.commSSEChannel.close();
  this.commSSEChannel = null;
  if (this.commSagaChannel !== undefined) {
    this.commSagaChannel.put({ type: 'CLOSE_COMM_SAGA_CHANNEL' });
    this.commSagaChannel = null;
  }
}
