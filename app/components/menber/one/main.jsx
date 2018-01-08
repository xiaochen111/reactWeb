import React, { Component } from 'react';
import StepOne from './stepOne/main.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../../action/wallet';

class MainOne extends Component{
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	componentDidMount(){
	}
	render(){
		return (
			<div>
				<StepOne main = {this.props}/>
			</div>
		)
	}
}

// export default MainOne;


function mapStateToProps(state) {
    return {
    	 name:state.wallet.name,
    	 walletOne:state.wallet.walletOne,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actionWallet: bindActionCreators(action, dispatch)
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainOne);