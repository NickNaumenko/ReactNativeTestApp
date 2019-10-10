import {all} from 'redux-saga/effects';

import imagesListSagas from '../views/ImagesListView/sagas';

export default function* rootSaga() {
  yield all([imagesListSagas()]);
}
