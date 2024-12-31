const initialState = {
    products: [], 
    loading: false,
    error: null,
};

export const getProductsreducer = (state = initialState, action) => {
    switch (action.type) {
        //case "REQUEST_GET_PRODUCTS":
           // return { ...state, loading: false, error: null };
        case "SUCCESS_GET_PRODUCTS":
            return { ...state, products: action.payload, loading: false, error: null };
        case "FAIL_GET_PRODUCTS":
            return { ...state, products: [], loading: false, error: action.error };
        default:
            return state;
    }
};

