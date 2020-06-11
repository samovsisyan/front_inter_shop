// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import App from './App';
// // import * as serviceWorker from './serviceWorker';
// //
// // import './assets/style/main.min.css';
// //
// //
// //
// // import {createStore, applyMiddleware} from 'redux'
// // import createSagaMiddleware from 'redux-saga'
// // import {Provider} from 'react-redux';
// //
// // import reducers from './store/reducers';
// // import sagas from './store/sagas';
// //
// //
// // const sagaMiddleware = createSagaMiddleware()
// // const store = createStore(
// //     reducers,
// //     applyMiddleware(sagaMiddleware)
// // );
// // sagaMiddleware.run(sagas);
// //
// //
// // ReactDOM.render(
// //     <Provider store={store}>
// //             <App/>
// //     </Provider>, document.getElementById('root'));
// //
// //
// // // If you want your app to work offline and load faster, you can change
// // // unregister() to register() below. Note this comes with some pitfalls.
// // // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.unregister();
//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import App from './App';
// // import * as serviceWorker from './serviceWorker';
//
// import './assets/style/main.min.css';
//
// import reducers from './store/reducers';
//
// import sagas from './store/sagas';
//
//
// const sagaMiddleware = createSagaMiddleware();
//
// const store = createStore(
//     reducers,
//     applyMiddleware(sagaMiddleware),
// );
//
// sagaMiddleware.run(sagas);
//
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root'),
// );
//
//



import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './assets/style/main.min.css';



import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux';

import reducers from './store/reducers';
import sagas from './store/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(sagas);


ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
