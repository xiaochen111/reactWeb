import { Modal,message} from 'antd';
import React, { Component } from 'react';
import httpAxios from '../../../tool/axios';




class ToolModel extends Component{
	constructor(props){
		super(props);
		this.state={
			toolcommon:[],
			title:'',
			url:'',
		}
	}
	componentDidMount(){
		httpAxios('persontool/querytoolcommon','','',(res)=>{
		    this.setState({
		    	toolcommon:res
		    })
		})
	}

    handleOk(e){
        let {actionIndex} = this.props;
		actionIndex.showModel(false)
    }
    handleCancel(e){
        let {actionIndex} = this.props;
        actionIndex.showModel(false)
    }

    aLink(e,item){
    	console.log(item)
    	let {name,link}=item;
    	let itemobj = {name,link}
    	let {actionIndex} = this.props;
    	actionIndex.perToolAdd(itemobj);  //改变ruducer状态 从而改变页面数据
    	httpAxios('persontool/inserttoolperson','',itemobj,(res)=>{
    		console.log(res)
    		if(res.code != '1'){
    			message.info(res.message);
    		}
    	})
    }

    handlerChange(event){
    	let val = event.target.value;
    	let name = event.target.name;
    	this.setState({
    		[name]:val
    	},()=>console.log(this.state))
    }

	render(){
		let flag = this.props.visible;

		return (
			<Modal
	            title="新增工具"
	            visible={flag}
	            onOk={this.handleOk.bind(this)}
	            onCancel={this.handleCancel.bind(this)}
	            footer={null}	
            >
	        	<div className="popupBox">
	        		<div className="titSer">
				        <input type="text" className="titIpt" value={this.state.title} name='title' onChange={this.handlerChange.bind(this)} />
				        <input type="text" className="urlIpt" value={this.state.url} name='url' onChange={this.handlerChange.bind(this)}/>
				        <button>添加</button>
				    </div>
				    <div className="boxLink">
				        {
				        	this.state.toolcommon.map((item,index)=>{
				        		return (
				        			<span key={index} onClick={this.aLink.bind(this,event,item)}>{item.name}</span>
				        		)
				        	})
				        }
				    </div>
	        	</div>
            </Modal>
		)
	}
}

export default ToolModel;