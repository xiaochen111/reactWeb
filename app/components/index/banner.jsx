import React, { Component } from 'react';
import { Carousel } from 'antd';

class Banner extends Component{
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	componentDidMount(){
		
	}
	render(){
		return (
            <div className="banner">
                <Carousel autoplay>
				    <div><h3>1</h3></div>
				    <div><h3>2</h3></div>
				    <div><h3>3</h3></div>
				    <div><h3>4</h3></div>
				</Carousel>

				<div className="tabSer"></div>
            </div>
		)
	}
}

export default Banner;