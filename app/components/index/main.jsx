import React, { Component } from 'react';

import Banner from './banner.jsx';
import Tool from './tool/tool.jsx';



import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../action/action';
import parmes from './prames';






class Index extends Component{
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	componentDidMount(){
		console.log(this.props)
        let {actionIndex,list} = this.props;
        actionIndex.index(parmes)
	}
	render(){
        let {list,tool,actionIndex} = this.props;
        console.log(this.props)
		return (
            <div id="index">
                <Banner/>
                <div className="containers">
        				   <Tool tool={tool} actionIndex={actionIndex}/>
                   {
                       list.map((item,index)=>{
                           return (
                               <div key={index}>{item.addrCn}</div>
                           )
                       })
                   }
                  <span>{tool.visible}</span>
			           </div>
            </div>
		   )
	  }
}


function mapStateToProps(state) {
	console.log(state)
    return {
    	 name:state.index.name,
    	 list:state.index.list,
    	 res:state.index.res,
       tool:state.index.tool
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actionIndex: bindActionCreators(action, dispatch)
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);
