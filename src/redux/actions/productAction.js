function getProducts(searchQuery){
    return async (dispatch, getState)=>{
        let url =`https://my-json-server.typicode.com/es1564/react-hnm/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type:"getProductSuccess", payload:{data}})
    }
}

function getProductDetail(id){
    return async (dispatch, getState)=>{
        let url =`https://my-json-server.typicode.com/es1564/react-hnm/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type:"getProductDetailSuccess", payload:{data}})
    }

}

export const productAction={getProducts, getProductDetail}