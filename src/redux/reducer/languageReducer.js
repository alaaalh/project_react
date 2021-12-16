const INITIAL_STATE={
    currentLanguage: localStorage.getItem('lang'),
}

export default function language(state = INITIAL_STATE ,action) {
    switch(action.type){
        case "CHANGE_LANGUAGE":
            localStorage.setItem('lang' , action.payload)
            return{
                ...state,
                currentLanguage : action.payload,
            }
      
        default:
            return state;
    }
}