import {takeEvery, put, call, all} from 'redux-saga/effects';
import {fetchImages} from '../../routines';
import * as imagesService from '../../services/imagesService';

function* imagesRequest() {
  try {
    yield put(fetchImages.request());
    const images = yield call(imagesService.getImages);
    yield put(fetchImages.success(images));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(fetchImages.fulfill());
  }
}

function* watchImagesRequest() {
  yield takeEvery(fetchImages.TRIGGER, imagesRequest);
}

export default function* imagesListSagas() {
  yield all([watchImagesRequest()]);
}
