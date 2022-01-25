

const counterReducer = (data = 0, action) =>{
    switch(action.type){
        case "increment":
            return data = data + 1;
        case "decrement":
            return data = data - 1;
        default:
            return data;
    }
}

export default counterReducer;