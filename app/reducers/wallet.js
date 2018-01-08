const update = require('react/lib/update');


const initialState = {
    name: "钱包",
    walletOne: {
        currentMoney: '',
        data: {}
    },
};



function wallet(state = initialState, action) {
    switch (action.type) {
        case 'walletOneTable':
            return update(state, {
                name: { $set: '首页的reducers action之后' },
                walletOne: {
                    data: {
                        $set: action.data
                    }
                },
            })
        case 'currentMoney':
            return update(state, {
                walletOne: {
                    currentMoney: {
                        $set: action.data
                    }
                },
            })


        default:
            return state
    }
}

export default wallet;