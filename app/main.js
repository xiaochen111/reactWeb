import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { hashHistory,routes } from 'react-router';
import RouteMap from './routes/router.jsx';
import 'antd/dist/antd.css';
import './css/style.less';




//配置redux
import { Provider } from 'react-redux';
import {createStore, combineReducers,applyMiddleware} from 'Redux';  //applyMiddleware 中间件
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';  //激活redux-thunk中间件，只需要在createStore中加入applyMiddleware(thunk)就可以


// import fcl from './reducers/reducers';
// import box from './reducers/reduc_box';
import index from './reducers/index';
import wallet from './reducers/wallet';

let store = createStore(combineReducers({index,wallet}),applyMiddleware(thunk));


//subscribe用于监听事件，每当dispatch的时候会执行
store.subscribe(() =>
  console.log('获取当前状态容器：', store.getState())
)

class Index extends Component{
	render(){
		return(
            <Provider store={store}>
                <RouteMap history={hashHistory}/>
            </Provider>
		)
	}
}


ReactDom.render(<Index/>, document.getElementById('content'));