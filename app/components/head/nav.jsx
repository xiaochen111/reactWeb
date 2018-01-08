import React, { Component } from 'react';
import { Link } from 'react-router';
import {commonStorage} from '../../tool/tool';
class Topul extends Component{
	constructor(props){
	     super(props);
	     this.state={
	     	userInfoStr:""
	     }
	}
	componentDidMount(){
		let userInfoStr = commonStorage.getValuelocal("userInfoStr");
		if(userInfoStr){
			this.setState({
				userInfoStr:userInfoStr
			})
		}
	}
	render(){
		return(
			<div>
				<ul className="t_ul">
					<li><Link to="/index">菜单一</Link></li>
                    <li><Link to="/test1">测试1</Link></li>
                    {	
                    	this.state.userInfoStr
                    	?
                    	<li><Link to="/menber">{this.state.userInfoStr}</Link></li>
                    	:
                    	<li><Link to="/login">登录</Link></li>
                    }
				</ul>
			</div>
		)
	}
}

export default Topul;