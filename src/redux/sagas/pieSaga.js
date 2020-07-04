import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


function* fetchPie() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    
    const response = yield axios.get('api/pie', config);
    console.log('inside pieSaga', response.data)
    yield put({ type: 'SET_PIE', payload: response.data });
  } catch (error) {
    console.log('Pie get request failed', error);
  }
}

function* pieSaga() {
  yield takeEvery('FETCH_PIE', fetchPie);
}

export default pieSaga;