
import { NavigationActions } from 'react-navigation';

import {
  put,
  take,
 } from 'redux-saga/effects';
 import { channel } from 'redux-saga';

  export function* reduxNavigate(action) {
    console.log(action);
    let params = null;
    if (action.data.data) {
      params = action.data.data;
    }
    yield put(
      NavigationActions.navigate({ routeName: action.data.name, params })
    );
  }

  export function* userAuth() {
    this.splashChannel = channel();
    const setTypeLoginScreen = () => {
      this.splashChannel.put({
        type: 'SET_LOGIN_TYPE',
        data: {
          loginType: 'LOGIN'
        }
       });
    };
    this.timer = setTimeout(setTypeLoginScreen, 4000);
    const action = yield take(this.splashChannel);
    yield put(action);
  }
