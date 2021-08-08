const intialState = {
    category: '',
    filterData: {                
        model: '',
        condition: '',
        photo: 'true',
        video: '',
        location: '',
        brand: '',
        transmision:'',        
        fuel: '',
        exterior:'',
        interior:'',        
    },
    price: {
        price1: '',
        price2: '',
    },
    mileage:{
        mileage1: '',
        mileage2: '',
    },
    viewType: 'List',
    sortType: '',
    data:[],    
}

const reducer = (state = intialState, action) => {
    if (action.type === 'CHANGE_CATEGORY'){
        return{
            ...state,
            category: action.value,
            filterData: {                
                model: '',
                condition: '',
                photo: '',
                video: '',
                location: '',
                brand: '',
                transmision:'',                
                fuel: '',
                exterior:'',
                interior:'',
            }
        }
    }
    if (action.type === 'CHANGE_PRICE'){
        return{
            ...state,
            price: action.value
        }
    }
    if (action.type === 'CHANGE_MILEAGE'){
        return{
            ...state,
            mileage: action.value
        }
    }
    if(action.type === 'CHANGE_FILTER'){
        return{
            ...state,
            filterData: {                
                ...action.value
            }
        }        
    }
    if(action.type === 'CHANGE_SORT'){        
        return{
            ...state,
            sortType: action.value
        }
    }
    if(action.type === 'CHANGE_VIEW'){
        return{
            ...state,
            viewType: action.value
        }
    }
    if(action.type === 'SET_DATA'){
        return{
            ...state,
            data: action.value
        }
    }    
    return state;
};
export default reducer;