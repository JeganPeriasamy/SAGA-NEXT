import { legacy_createStore as createStore,compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import saga  from '../Redux/saga'

const sagaMiddleware = createSagaMiddleware();


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = compose(applyMiddleware(sagaMiddleware),)(createStore)(rootReducer);

  sagaMiddleware.run(saga);
 
export default store

