// actionTypes
const GET_ALL = 'get-all'
const GET_ONE ='get-one'

//initState
export const initialState = {
    countries: [],
    country: []
}

// reducer
export const reducer = (state, action) => {
    switch(action.type){
        case GET_ALL:
           return{
            ...state,
            countries : action.payload
           }
           case GET_ONE:
            return{
                ...state,
                country: action.payload
            }
        default :
        return state
    }
}

//actionCreators
export const getALLAC = (data)=>({type: GET_ALL, payload : data});
export const getOneAc = (data)=>({type: GET_ONE, payload: data})
