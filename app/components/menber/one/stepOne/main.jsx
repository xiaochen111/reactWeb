import React, { Component } from 'react';
import { Link } from 'react-router';
import { Table , Pagination } from 'antd';

import 'date-format-lite/dist/index-min';//时间戳转时间格式

import httpAxios from '../../../../tool/axios';
import {commonStorage} from '../../../../tool/tool';


const columns = [{
  title: '日期',
  width:200,
  dataIndex: 'reDate',
  render: text => new Date(text).format('YYYY-MM-DD hh:mm:ss'), //时间戳转时间格式方法调用（引包时间增加了format方法）
}, {
  width:200,
  title: '类型',
  dataIndex: 'reSigns',
  render:(text, record, index)=>{
  	 if(text == 1){
  	 	return <span>收入</span>
  	 }else{
  	 	return <span>支出</span>
  	 }
  },
}, {
  width:200,
  title: '金币',
  dataIndex: 'reMoney',
  render:(text, record, index)=>{
  	 if(record.reSigns == 1){
  	 	return `+${text}`
  	 }else{
  	 	return `-${text}`
  	 }
  },
},{
  title: '备注',
  dataIndex: 'remark',
}];


let {id} = commonStorage.getObject('userInfo');
let obj = {
			userId:id,
			pageSize:10,
			pageNum:1,
		}

class StepOne extends Component{
	constructor(props){
		super(props);
		this.state={
			currentMoney:0,
		}
	}
	componentDidMount(){
		
		httpAxios('recharge/getUserMsg',obj,'',(res)=>{
			console.log(res)
			let {currentMoney} = res.data;
			this.setState({
				currentMoney
			})
		})


		let {actionWallet,walletOne} = this.props.main;
		actionWallet.walletOneTable(obj);

	}

	pagination(page){
		let {actionWallet} = this.props.main;
		obj.pageNum = page;
		actionWallet.walletOneTable(obj);
	}
	render(){
		let {actionWallet,walletOne} = this.props.main;
		let arrOjb = walletOne.data.data;
		let data = [];
		if(arrOjb){
			let arr = arrOjb.result;
			arr.forEach((item,index)=>{
				item.key=index;//每个数据需要一个key
			})
			data = arr;
		}else{
			arrOjb = {};
		}
		
		return (
			<div className="person_top clearfix" id="wallet">
				<h2>钱包</h2>
				<div className="money clearfix">
		            <span>{parseFloat(this.state.currentMoney).toFixed(2)}</span>
		            <Link to="/steptwo">充值</Link>
		        </div>

		        <Table
		        style={{marginTop:'30px'}}
			    columns={columns}
			    dataSource={data}
			    bordered
			    pagination={false}/>
                

                <Pagination defaultCurrent={1} defaultPageSize={10} total={arrOjb.totalCount} style={{marginTop:'20px'}} onChange={this.pagination.bind(this)}/>

			</div>
		)
	}
}

export default StepOne;