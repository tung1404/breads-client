import { combineReducers } from 'redux';
import auth from './auth';
import errors from './errors';
import favoriteReadings from './favReadings';
import globalReadings from './globalReadings';
import loading from './loader';
import notifications from './notifications';
import search from './search';
import subscriptionReadings from './subReadings';
import subscriptions from './subscriptions';
import summary from './summary';
import user from './user';
import userReadings from './userReadings';

const rootReducer = combineReducers({
    [auth.constants.NAME]: auth.reducer,
    [errors.constants.NAME]: errors.reducer,
    [favoriteReadings.constants.NAME]: favoriteReadings.reducer,
    [globalReadings.constants.NAME]: globalReadings.reducer,
    [loading.constants.NAME]: loading.reducer,
    [notifications.constants.NAME]: notifications.reducer,
    [search.constants.NAME]: search.reducer,
    [subscriptionReadings.constants.NAME]: subscriptionReadings.reducer,
    [subscriptions.constants.NAME]: subscriptions.reducer,
    [summary.constants.NAME]: summary.reducer,
    [user.constants.NAME]: user.reducer,
    [userReadings.constants.NAME]: userReadings.reducer
});
  
export default rootReducer;