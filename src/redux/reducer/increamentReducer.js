const INITIAL_STATE = {
    currentCounter: 0
}

export default function increament(state = INITIAL_STATE ,action){
    switch (action.type){
        case "INCREAMENT":
            localStorage.setItem("increament",action.payload)
            return{
                ...state,
                currentCounter: action.payload
            }
        default:
            return state
    }

}
