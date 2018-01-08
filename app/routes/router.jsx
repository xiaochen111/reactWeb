import React, { Component } from 'react';
import { Router, Route ,IndexRoute } from 'react-router';
import App from '../components/head/head.jsx';
import Index from '../components/index/main.jsx';
import Test1 from '../components/test/test1.jsx';

// 会员配置
 import Menber from '../components/menber/menber.jsx';
// import MainOne from '../components/menber/one/main.jsx';
// import StepTwo from '../components/menber/one/stepTwo/main.jsx';
//  import MainTwo from '../components/menber/two/main.jsx';



class RouteMap extends Component {
    render() {
        return (
        	<div>
        		<Router history={this.props.history}>
					<Route path='/' component={App}>
						<IndexRoute component={Index}/>
						<Route path='index' component={Index}/>
						<Route path='test1' component={Test1}/>
                        <Route path='menber' component={Menber}>
                        {/*
                            <IndexRoute component={MainOne}/>
                            <Route path='/menLiOne' component={MainOne}/>
                            <Route path='/steptwo' component={StepTwo}/>
                            <Route path='/menLiTwo' component={MainTwo}/>
                            */}
                        </Route>
					</Route>
	            </Router>
        	</div>
        )
    }
}
export default RouteMap;