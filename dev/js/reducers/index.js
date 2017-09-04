import {combineReducers} from 'redux';
import StatsReducer from './reducer-stats';
import BuildingReducer from './reducer-buildings';
import EventReducer from './reducer-events';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    stats: StatsReducer,
    buildings: BuildingReducer,
    events: EventReducer
});

export default allReducers
