let initialState = {
    productList:[],
    product:null
};

function productReducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case "getProductSuccess":
            return {
                ...state, productList: payload.data
            }
        case "getProductDetailSuccess":
            return {
                ...state, product: payload.data
            }
        default:
            return {...state};
    }
}

export default productReducer;