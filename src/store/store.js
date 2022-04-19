import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';
import { AuthReducer } from './reducers/AuthReducer';
import BKReducer from './reducers/BKReducer';
import CKReducer from './reducers/CKReducer';
import HotProjectReducer from './reducers/HotProjectReducer';
import ProjectDetailReducer from './reducers/ProjectDetailReducer';
import ProjectsReducer from './reducers/ProjectReducer';
import ReviewListByIDReducer from './reducers/ReviewListByIDReducer';
import ReviewListByUserProjectReducer from './reducers/ReviewListByUserProjectReducer';
import ReviewlistReducer from './reducers/ReviewListReducer';
import ReviewReducer from './reducers/ReviewReducer';
import TopProjectReducer from './reducers/TopProjectReducer';
import UsersReducer from './reducers/UserReducer';
import UserRoleReducer from './reducers/UserRoleReducer';

const middleware = applyMiddleware(thunk);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    projects: ProjectsReducer,
    hotproject: HotProjectReducer,
    topproject: TopProjectReducer,
    projectdetail: ProjectDetailReducer,
    users: UsersReducer,
    userroles: UserRoleReducer,
    auth: AuthReducer,
    reviewresponses: ReviewReducer,
    listreview: ReviewlistReducer,
    listreviewbyid: ReviewListByIDReducer,
    form: reduxFormReducer,
    cardanoknowledge: CKReducer,
    blockchainknowledge: BKReducer,
    reviewuserlist: ReviewListByUserProjectReducer
});

const persistedState = loadState();
const store = createStore(reducers, persistedState, composeEnhancers(middleware));
store.subscribe(() => {
    saveState(store.getState());
})
export default store
