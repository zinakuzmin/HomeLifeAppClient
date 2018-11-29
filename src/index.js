import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './components/app';
// import * as serviceWorker from './serviceWorker';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {createStore} from 'redux';
import allReducers from './reducers';

const store = createStore(allReducers);

// const Wrapper  = () => {
//     return (<MuiThemeProvider>
//         <App />
//         </MuiThemeProvider>)
// }

// ReactDOM.render(<Provider store={store}> <Wrapper /> </Provider>, document.getElementById('root'));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
