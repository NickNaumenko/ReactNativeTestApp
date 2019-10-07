import {all} from 'redux-saga/effects';

import imagesListSagas from '../containers/ImagesList/sagas';

export default function* rootSaga() {
  yield all([imagesListSagas()]);
}
