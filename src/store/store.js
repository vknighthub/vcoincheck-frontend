import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist-indexeddb-storage';
import thunk from 'redux-thunk';
import { AuthReducer } from './reducers/AuthReducer';
import BKReducer from './reducers/BKReducer';
import CKReducer from './reducers/CKReducer';
import DictionaryReducer from './reducers/DictionaryReducer';
import ECosystemReducer from './reducers/ECosystemReducer';
import FAQsReducer from './reducers/FAQsReducer';
import HotProjectReducer from './reducers/HotProjectReducer';
import ProjectDetailReducer from './reducers/ProjectDetailReducer';
import ProjectManagementReducer from './reducers/ProjectManagementReducer';
import ProjectsReducer from './reducers/ProjectReducer';
import ProjectTypeReducer from './reducers/ProjectTypeReducer';
import ReviewListByIDReducer from './reducers/ReviewListByIDReducer';
import ReviewListByUserProjectReducer from './reducers/ReviewListByUserProjectReducer';
import ReviewlistReducer from './reducers/ReviewListReducer';
import ReviewReducer from './reducers/ReviewReducer';
import TopProjectReducer from './reducers/TopProjectReducer';
import UsersReducer from './reducers/UserReducer';
import UserRoleReducer from './reducers/UserRoleReducer';
import NewsReducer from './reducers/NewsReducer'

const middleware = applyMiddleware(thunk);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    projects: ProjectsReducer,
    projectmanagement: ProjectManagementReducer,
    projecttype: ProjectTypeReducer,
    ecosystem: ECosystemReducer,
    hotproject: HotProjectReducer,
    topproject: TopProjectReducer,
    projectdetail: ProjectDetailReducer,
    users: UsersReducer,
    userroles: UserRoleReducer,
    auth: AuthReducer,
    reviewresponses: ReviewReducer,
    listreview: ReviewlistReducer,
    listreviewbyid: ReviewListByIDReducer,
    dictionary: DictionaryReducer,
    cardanoknowledge: CKReducer,
    blockchainknowledge: BKReducer,
    reviewuserlist: ReviewListByUserProjectReducer,
    faqs: FAQsReducer,
    news: NewsReducer,
    form: reduxFormReducer,
});

const persistConfig = {
    key: 'root',
    storage: storage('myDB'),
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, composeEnhancers(middleware));

export const persistor = persistStore(store)

export default store
