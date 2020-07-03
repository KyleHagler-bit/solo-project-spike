import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


function* fetchChart() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    
    const response = yield axios.get('api/chart', config);
    console.log('inside chartSaga', response.data)
    yield put({ type: 'SET_CHART', payload: response.data });
  } catch (error) {
    console.log('Chart get request failed', error);
  }
}

function* chartSaga() {
  yield takeEvery('FETCH_CHART', fetchChart);
}

export default chartSaga;
