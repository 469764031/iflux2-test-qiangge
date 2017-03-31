import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import Main from './js/modules/main';
import Home from './js/modules/home';

render((
    <Router history={hashHistory}>
        {/* 主页 */}
        <Route path="/" component={Main}>
          {/* 默认 */}
          <IndexRoute  component={Home}/>
          <Route path="list" getComponent={(location, cb) => {
            require(['./js/modules/list'], callBackModule(cb))
          }}/>
        </Route>
    </Router>
), document.getElementById('content'));

/**
 * 回调异步模块
 */
function callBackModule(cb){
  return function(component) {
    cb(null, component.default)
  }
}





