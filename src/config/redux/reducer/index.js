const intialState = {
    category: '',
    filterData: {                
        model: '',
        condition: '',
        photo: '',
        video: '',
        location: '',
        brand: '',
        transmision:'',
        price1: '',
        price2: '',
        fuel: '',
        exterior:'',
        interior:'',
        mileage1: '',
        mileage2: '',
    },
    viewType: 'List',
    sortType: 'asc',
    data:[],    
}

const reducer = (state = intialState, action) => {
    if (action.type === 'CHANGE_CATEGORY'){
        return{
            ...state,
            category: action.value
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
        console.log(action.value)
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