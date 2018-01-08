import React, { Component } from 'react';
import { Modal, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete} from 'antd';
import httpAxios from '../../../tool/axios';
import {commonStorage} from '../../../tool/tool';
import md5 from "react-native-md5";

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


class LoginCreate extends Component{
	constructor(props){
		super(props);
		this.state={
			confirmDirty: false,
    		autoCompleteResult: [],
		}
	}
	componentDidMount(){
		
	}


	handleOk(e){
        let {actionIndex} = this.props;
		actionIndex.showLogin(false)
    }
    handleCancel(e){
        let {actionIndex} = this.props;
        actionIndex.showLogin(false)
    }




    //表单
    handleSubmit(e){
	    e.preventDefault();
	    this.props.form.validateFieldsAndScroll((err, values) => {
	      if (!err) {
	        console.log('Received values of form: ', values);
	        values.identity = 2;
	        let password = md5.hex_md5(values.password);
	        values.password = password;
	        console.log(values)
	        httpAxios('helperLogin/login',values,'',(res)=>{
	        	console.log(res)
	        	if(res.status===0){
	        		Modal.error({
					    content: res.message,
					});
					return
	        	}
	        	commonStorage.setValuelocal('aideApiKey',res.data.apiKey);
	        	commonStorage.setValuelocal('userInfoStr',res.data.userInfo.username);
	        	commonStorage.setObject('userInfo',res.data.userInfo)
	        	location.reload();	
	   //      	Modal.success({
				//     content: res.message,
				// });
	        })

	      }
	    });
	}
	  
	checkConfirm(rule, value, callback){
		console.log(value)
		console.log(this.state.confirmDirty)
		if(!value){
			value=[];
		}
		if(value.length<6){
			callback("密码长度不能少于6位");
			return;
		}
	    const form = this.props.form;
	    if (value && this.state.confirmDirty) {
	      form.validateFields(['confirm'], { force: true });
	    }
	    callback();
	}
	  

	render(){
		let flag = this.props.login; //弹出层是否显示

		const { getFieldDecorator } = this.props.form;
	    const { autoCompleteResult } = this.state;

	    const formItemLayout = {
	      labelCol: {
	        xs: { span: 24 },
	        sm: { span: 6 },
	      },
	      wrapperCol: {
	        xs: { span: 24 },
	        sm: { span: 14 },
	      },
	    };
	    const tailFormItemLayout = {
	      wrapperCol: {
	        xs: {
	          span: 24,
	          offset: 0,
	        },
	        sm: {
	          span: 14,
	          offset: 6,
	        },
	      },
	    };

	    const websiteOptions = autoCompleteResult.map(website => (
	      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
	    ));


		return (
			<Modal
	            title="登录/注册"
	            visible={flag}
	            onOk={this.handleOk.bind(this)}
	            onCancel={this.handleCancel.bind(this)}
	            footer={null}
	            
            >
        	
        		<div className="loginPopup">
        			<Form onSubmit={this.handleSubmit.bind(this)}>
				        <FormItem
				          {...formItemLayout}
				          label="用户名"
				          hasFeedback
				        >
				          {getFieldDecorator('username', {
				            rules: [ {
				              required: true, message: '请输入用户名',
				            }],
				          })(
				            <Input />
				          )}
				        </FormItem>
				        
				        
				        <FormItem
				          {...formItemLayout}
				          label="密码"
				          hasFeedback
				        >
				          {getFieldDecorator('password', {
				            rules: [
				            { whitespace: false,},
				            {validator: this.checkConfirm.bind(this),}
				            ],
				          })(
				            <Input type="password"/>
				          )}
				        </FormItem>

				        <FormItem {...tailFormItemLayout}>
				          <Button type="primary" htmlType="submit">登录</Button>
				        </FormItem>
				    </Form>
        		</div>

            </Modal>
		)
	}
}


const Login = Form.create()(LoginCreate);

export default Login;