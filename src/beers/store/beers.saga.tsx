import { call, put, takeLatest } from 'redux-saga/effects'
import { getBeersResponse, BeersActionsTypes } from './beers.actions';
import { fetchTeam } from '../api/beers.api';

function* fetchTeamEffect() {
	try {
		const team = yield call(fetchTeam);
		yield put(getBeersResponse(team));
	} catch (e) {
		// TODO return some action.
	}
}

function* teamSagas() {
	yield takeLatest(BeersActionsTypes.GET_BEERS_REQUEST, fetchTeamEffect);
}

export default teamSagas;