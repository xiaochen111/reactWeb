import httpAxios from '../tool/axios';




function initTable(data){
	return {
		type:"walletOneTable",
		data,
	}
}


export const walletOneTable = (parmes) => async(dispatch) =>{
	httpAxios('recharge/getRechargeList',parmes,'',function(res){
		console.log(res)
	    dispatch(initTable(res))
	})
} 
