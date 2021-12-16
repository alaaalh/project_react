const INITIAL_STATE = {
    currentGoots: 0
}

export default function carts(state = INITIAL_STATE ,action){
    switch (action.type){
        case "ADD_TO_CART":
            localStorage.setItem("carts",action.payload)
            return{
                ...state,
                currentGoots: action.payload
            }
        default:
            return state
    }

}