
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../Reducers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

/** Saga Middleware */
const sagaMiddleware = createSagaMiddleware();

// Be sure to ONLY add this middleware in development!
const middlewares = process.env.NODE_ENV !== 'production' ?
    [require('redux-immutable-state-invariant').default(), sagaMiddleware] :
    [sagaMiddleware];

const store = createStore(
    rootReducer,
    // componseWithDevTools is use for redux dev tools 
    // read more about compose here https://redux.js.org/api/compose
    composeWithDevTools(
        applyMiddleware(...middlewares),
    )
)

/** run saga watchers */
sagaMiddleware.run(rootSaga);
export default store;

