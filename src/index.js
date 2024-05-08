import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route , Redirect } from 'react-router-dom';
import './index.css';

import Main from './view/other/main/main'
import Home from './view/home/home';
import AboutMe from './view/about_me/about_me';
import Works from './view/works/works'
import ContactMe from './view/contact_me/contact_me'

import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';
import reducer from './redux/index';

let store = createStore(reducer);

function render(){
  ReactDOM.render(
    <BrowserRouter>
        <Main store={store}>
            {/* <Redirect path="/" to="/home" />  */}
            <Route path="/home" component={Home}/>
            <Route path="/aboutme" component={AboutMe}/>
            <Route path="/works" component={Works}/>
            <Route path="/contactme" component={ContactMe}/>
        </Main>
    </BrowserRouter>,
document.getElementById('root'));
}
render();
serviceWorker.unregister();
store.subscribe(render);
