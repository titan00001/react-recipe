// const state = {

// }

const userInfoReducer = (state = {}, action) => {

    switch (action.type) {
        
        case "Get":
        case "Post":
            console.log("Action:",action.payload)
            return action.payload;
    
        default: 
            return state;
    }
}

export default userInfoReducer;