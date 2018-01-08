import httpAxios from '../tool/axios';


// function neitype(data){
// 	return {
// 		type:"fcl",
// 		data,
// 	}
// }

// export function liSlide(data){
// 	return {
// 		type:"liSlide",
// 		data,
// 	}
// }


// export const fcl = (parmes) => async(dispatch) =>{
// 	httpAxios('ocean_schedule/querypage',parmes,function(res){
// 	    //let list = res.result;
// 	    dispatch(neitype(res))
// 	})
// } 




//首页




export function showModel(data){
		return {
			type:"showModel",
			data,
		}
}
export function showLogin(data){
		return {
			type:"showLogin",
			data,
		}
}


function buyertype(data){
	return {
		type:"index",
		data,
	}
}

export const index = (parmes) => async(dispatch) =>{
	httpAxios(`api/radar/getRadars?pageNo=${parmes.pageNo}&pageSize=${parmes.pageSize}&provinceId=${parmes.id}`,'','',function(res){
		//let list = res.result;
	    dispatch(buyertype(res))
	})
} 


export function toolList(data){
	return {
		type:"toolList",
		data,
	}
}


export function perToolAdd(data){
	return {
		type:"perToolAdd",
		data,
	}
}

// export const toolList = () => async(dispatch) =>{
// 	httpAxios('persontool/queryTool','','',function(res){
// 		//let list = res.result;
// 	    dispatch(listInit(res))
// 	})
// } 