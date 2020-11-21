const CreatedRecipeReducer = (state = {}, action) => {


    switch (action.type) {

        case "INIT":
            return action.payload;

        case "ADD":
            let recipe = state;
            recipe.push(action.payload);
            return recipe;

        case "DEL":
            
            return state;
    
        default: return state;
            
    }

    
}

export default CreatedRecipeReducer;