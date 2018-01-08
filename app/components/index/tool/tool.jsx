import React, { Component } from 'react';
//import dataTool from '../../../analogData/analog.json';
import { Modal,message} from 'antd';
import httpAxios from '../../../tool/axios';
import {commonStorage} from '../../../tool/tool';

import ToolModel from './toolModel.jsx';
import Login from '../login/login.jsx';



import './gridly/jquery.gridly.css';
import './gridly/jquery.gridly.js';

let imgAdree = 'http://eshipping-filestore.oss-cn-hangzhou.aliyuncs.com/eshippinpupload/';



class Tool extends Component{
	constructor(props){
		super(props);
		this.state={
            toolList:[],
            bgColList:["#c23c3c","#636d94","#69b5f9","#73be66","#4191f3","#5e9e38","#1bc5bb","#ebc52e","#ff752f","#ff3d37"],
 
		}
	}
	componentDidMount(){
        let arr = [0,1,2,3,4,5,6,7,8,9];
        arr = arr.sort(randomSort);
        let bgColList = [];
        arr.forEach((item,index)=>{
            bgColList.push(this.state.bgColList[item])
        })  
        this.setState({
            bgColList:bgColList,

        })    

        $('.gridly').gridly({}); //拖拽


        // let cookeObj = commonStorage.getObject("cookeObj");
        // if(cookeObj){
        //     this.setList(cookeObj);
        // }else{
        //     this.toolInit(); //工具初始化
        // }
        this.toolInit(); //工具初始化

	}

    toolInit(){
        httpAxios("persontool/queryTool",'','',(res)=>{
            let {actionIndex} = this.props;
            actionIndex.toolList(res);
        })
    }
    // setList(res){
    //     //系统推荐
    //     let sysRecommend = res.sysAideTool;
    //     // 锁定
    //     let sysLock = res.suoAideTool;
    //     // 用户个人工具
    //     let sysPer = res.personAideTool;
        
    //     this.setState({
    //         sysRecommend:sysRecommend,
    //         sysPer:sysPer,
    //         sysLock:sysLock,
    //     })
    // }


    links(url){
        console.log(url)
    }
    delSys(index){  //删除工具
        console.log(index)
    }
    delPer(index){
        console.log(index)
    }

    showModal(){
        let {showModel,showLogin} = this.props.actionIndex;
        let apidApiKey = localStorage.getItem("aideApiKey");
        if(!apidApiKey){
            //message.warning('请登录');
            showLogin(true)
            return;
        }
        showModel(true)
    }
	render(){

        let {tool,actionIndex} = this.props;
        let {toolInit} = tool;


        let sysPer = toolInit.personAideTool || [];
        let sysRecommend = toolInit.sysAideTool || [];
        let sysLock = toolInit.suoAideTool || [];
        let maxPerLen = 10 - sysLock.length;
        let hideBlock = "block"; 
        if(sysLock.length + sysPer.length > 10){
            sysPer = sysPer.slice(0,maxPerLen); //个人最多这几个
            hideBlock = 'none'; //推荐隐藏
        }else{
            let sysRemLen = 11 - sysLock.length - sysPer.length;
            sysRecommend = sysRecommend.slice(0, sysRemLen)
        }

		return (
			<div className="tools">
            {/*系统锁定*/}
				<ul className="tipsOne" style={{width:sysLock.length*100+'px'}}>
                    {
                        sysLock.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <span onClick={this.links.bind(this,item.link)}>
                                        {
                                            item.logo
                                            ?
                                            <img src={imgAdree + item.logo} alt="" />
                                            :
                                            item.name.toString().charAt(0)
                                        }
                                    </span>
                                    <p>{item.name}</p>
                                </li>
                            )
                        })
                    }
                </ul>

            {/*个人*/}
                <ul className="tipsTwo gridly" style={{width:sysPer.length*100+'px'}}>
                    {
                        sysPer.map((item,index)=>{
                            return(
                                <li key={index} >
                                    <img src={require('../../../images/index/lock.png')} alt="" className="lock" />
                                    <img src={require('../../../images/index/del.png')} alt="" className="del" onClick={this.delPer.bind(this,index)} />
                                        {   
                                            item.logo
                                            ?
                                            <span onClick={this.links.bind(this,item.link)}>
                                                <img src={imgAdree + item.logo} alt="" />
                                            </span>
                                            :
                                            <span style={{background:this.state.bgColList[index]}} onClick={this.links.bind(this,item.link)}>
                                                {item.name.toString().charAt(0)}
                                            </span>
                                        }
                                    <p>{item.name}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            {/*系统*/}
                <ul className="tipsThree gridly" style={{width:sysRecommend.length*100+'px',display:hideBlock}} >
                    
                    {
                        sysRecommend.map((item,index)=>{
                            return(
                                <li key={index} >
                                    <img src={require('../../../images/index/lock.png')} alt="" className="lock" />
                                    <img src={require('../../../images/index/del.png')} alt="" className="del" onClick={this.delSys.bind(this,index)} />
                                        {   
                                            item.logo
                                            ?
                                            <span onClick={this.links.bind(this,item.link)}>
                                                <img src={imgAdree + item.logo} alt="" />
                                            </span>
                                            :
                                            <span style={{background:this.state.bgColList[index]}} onClick={this.links.bind(this,item.link)}>
                                                {item.name.toString().charAt(0)}
                                            </span>
                                        }
                                    <p>{item.name}</p>
                                </li>
                            )
                        })
                    }
                </ul>

                <span className="add" onClick={this.showModal.bind(this)}>
                    <img src={require('../../../images/index/add.png')} alt="" />
                </span>

                {/*工具弹框*/}
                <ToolModel  visible={tool.visible} actionIndex={actionIndex}/>

                {/*登录注册*/}
                <Login login={tool.login} actionIndex={actionIndex}/>

			</div>
		)
	}
}

function randomSort(a, b) {
    return Math.random() > 0.5 ? -1 : 1;
}

export default Tool;