import {combineReducers} from 'redux';
import StatsReducer from './stats.reducer';
import BuildingReducer from './buildings.reducer';
import EventReducer from './events.reducer';
import ActionReducer from './actions.reducer';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    stats: StatsReducer,
    buildings: BuildingReducer,
    events: EventReducer,
    actions: ActionReducer
});

export default allReducers
