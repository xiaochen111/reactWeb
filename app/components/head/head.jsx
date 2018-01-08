import React, { Component } from 'react';
import { Link } from 'react-router';
import Dibu from './../footer/footer.jsx';
import Topul from './nav.jsx';


class App extends Component {
	
    render() {
    	let col = {
			color:"#fff"
		}
        return (
        	<div>
        		<div id='main'>  {/*id=main 这层div是为了foot一直在下面  样式问题*/}

	        		<div className="topNav">
			            <div className="containers">
			                <div className="fl"><Link to="/index" style={col}>logo</Link></div>
			                <div className="fr">
			                	<Topul/>
			                </div>
			            </div>
		            </div>

		            <div> {/*中间渲染内容*/}
						<div>{this.props.children}</div>
						<div className="clearfix"></div>
					</div>

				</div>

				<Dibu/> {/*底部*/}
        	</div>
        )
    }
}




export default App;