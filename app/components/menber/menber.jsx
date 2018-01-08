import React, { Component } from 'react';
import { Link } from 'react-router';


class Menber extends Component{
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	componentDidMount(){
		
	}
	render(){
		return (
			<div className="containers" id="menber">
				<h2 className="titTop">会员中心</h2>
				<div className="leftNav">
					<ul>
						<li><Link to="/menLiOne">钱包</Link></li>
						<li><Link to="/menLiTwo">菜单二</Link></li>
						<li>菜单三</li>
					</ul>
				</div>
				<div className="rightMain">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Menber;