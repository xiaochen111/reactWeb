const update =  require('react/lib/update');


const initialState = {
    name:"首页的reducers",
    tool:{
        visible:false,
        login:false,
        toolInit:{},
    },
    res:{},
    list:[],
};


function index(state=initialState, action){
    switch(action.type){
        case "index":
     		return update(state,{
                name:{$set:'首页的reducers action之后'},
                res :{$set:action.data},
                list:{$set:action.data.result}
            })

        case "showModel":
            return update(state,{
                tool:{
                    visible:{$set:action.data}
                },
            })

        case "showLogin":
            return update(state,{
                tool:{
                    login:{$set:action.data}
                },
            })

        case "toolList":
            return update(state,{
                tool:{
                    toolInit:{$set:action.data}
                },
            })

        case "perToolAdd":
            let {personAideTool} = state.tool.toolInit;
            personAideTool.unshift(action.data);
            return update(state,{
                tool:{
                    toolInit:{
                        personAideTool:{$set:personAideTool}
                    }
                },
            })

        default:
            return state
    }
}

module.exports =  index;