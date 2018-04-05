import {
  takeEvery,
  all
} from 'redux-saga/effects';
// import { settingTypes } from '../Redux/SettingRedux';
// import { sseChannelTypes } from '../Redux/SseChannelRedux';
import { userTypes } from '../Redux/UserRedux';

// import {
//   openCommSseChannel,
//   closeCommSseChannel,
// } from './SseChannelSaga';

import {
  userAuth,
} from './UserSaga';

 export default function* mySaga() {
   yield all([

    takeEvery(userTypes.SET_ADVISER_DATA, userAuth),

  ]);
}
