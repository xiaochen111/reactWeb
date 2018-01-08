import React, { Component } from 'react';
import list from './data';

class StepTwo extends Component{
	constructor(props){
		super(props);
		this.state={
			index:0,
			price:30,
		}
	}
	componentDidMount(){
		
	}
	select(index,price){
		this.setState({
			index:index,
			price:price,
		})
	}
	render(){
		let xb = this.state.index;
		return (
			<div className="person_top" id="account">
				<div className="headTit">
		            <div className="curAcc">
		                当前帐号：dsd<img src={require('../../../../images/wallet/VIP.png')} alt="" />
		            </div>
		            <span className="jinbi">
		        		您持有：<span className="red">22</span>金币
		            </span>
		            <span className="question">
		        		<img src={require('../../../../images/wallet/question.png')} alt=""/> 常见问题
		        	</span>
		        </div>

		        <dl className="recharge">
		            <dt>金币充值：</dt>
		            {
		            	list.map((item,index)=>{
		            		return (
		            			<dd className={xb===index?'currentAct':''} key={index} onClick={this.select.bind(this,index,item.price)}>
					                <span className="cz">{item.title}</span>
					                <span className="ajb">{item.jinbi}金币/{item.price}元</span>
					            </dd>
		            		)
		            	})
		            }
		        </dl>

		        <dl className="payment">
		            <dt>支付方式：</dt>
		            <dd className="curpay">
		                <img src= {require('../../../../images/wallet/zhifu.jpg')} alt="" />
		            </dd>
		        </dl>

		        <dl className="actual">
		            <dt>实付金额：</dt>
		            <dd><span className="yuan">{this.state.price}</span>元</dd>
		        </dl>


			</div>
		)
	}
}

export default StepTwo;